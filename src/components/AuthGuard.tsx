"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { isAdminEmail } from "@/lib/rbac";
import { doc, getDoc } from "firebase/firestore";
import { adminDb, auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authResolved, setAuthResolved] = useState(false);

  const normalizedPathname = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const isAdminRoute = pathname.startsWith("/admin");

  const publicRoutes = ["/login", "/admin/login"];

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
       setUser(u);
       setAuthResolved(true);
    });
    // Handle back-button from external sites (Razorpay payment links).
    // bfcache freezes React state — pageshow fires on restore.
    // auth.currentUser is always synchronously available so we resolve instantly.
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        const currentUser = auth.currentUser;
        setUser(currentUser);
        setAuthResolved(true);
        setIsAuthenticated(currentUser ? true : null);
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => {
      unsub();
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  useEffect(() => {
    if (!authResolved) return;

    const checkAccess = async () => {
      const isPublic = publicRoutes.includes(normalizedPathname) || 
                       normalizedPathname.startsWith("/blog") || 
                       normalizedPathname.startsWith("/404") ||
                       normalizedPathname.startsWith("/not-found");

      if (isAdminRoute) {
        if (pathname === "/admin/login") {
           setIsAuthenticated(true);
           return;
        }
        if (!user) {
           router.push("/admin/login");
           setIsAuthenticated(false);
           return;
        }
        let userIsAdmin = isAdminEmail(user.email);
        if (!userIsAdmin) {
          try {
             const userDoc = await getDoc(doc(adminDb, "users", user.uid));
             if (userDoc.exists() && userDoc.data()?.role === "admin") {
               userIsAdmin = true;
             }
          } catch (e) {}
        }
        if (!userIsAdmin) {
          router.push("/admin/login");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } else {
        if (user) {
           const isAdmin = isAdminEmail(user.email);
           if (!user.emailVerified && !isAdmin && !isPublic && !normalizedPathname.startsWith("/verify-email") && !normalizedPathname.startsWith("/auth/action")) {
               router.push("/verify-email");
               setIsAuthenticated(false);
           } else {
               setIsAuthenticated(true);
           }
        } else if (!isPublic) {
           router.push("/login");
           setIsAuthenticated(false);
        } else {
           setIsAuthenticated(true);
        }
      }
    };

    checkAccess();
  }, [pathname, user, authResolved, router]);

  // Allow unauthenticated access to public routes
  if (publicRoutes.includes(normalizedPathname) || normalizedPathname.startsWith("/blog") || pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  if (isAuthenticated === null) {
      return (
         <div className="min-h-screen bg-[#020617] flex flex-col justify-center items-center">
            <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
            <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Validating Ecosystem Connection...</div>
         </div>
      );
  }

  return <>{children}</>;
}
