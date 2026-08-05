import { adminAuth } from "./firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export async function getAdminUser(): Promise<User | null> {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(adminAuth, (user) => {
            unsubscribe();
            resolve(user);
        }, (error) => {
            console.error("Auth helper error:", error);
            resolve(null);
        });
    });
}

export async function getAdminToken(): Promise<string | null> {
    const user = await getAdminUser();
    if (!user) return null;
    return await user.getIdToken();
}
