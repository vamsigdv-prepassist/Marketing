import { auth } from "./firebase";
import { onAuthStateChanged, User } from "firebase/auth";

/**
 * Native async helper to retrieve the current Firebase User securely.
 * This is the primary handler for Firebase Auth session state.
 */
export async function getCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe();
            resolve(user);
        }, (error) => {
            console.error("Auth helper error:", error);
            resolve(null);
        });
    });
}

/**
 * Native async helper for session tokens.
 */
export async function getAuthToken(): Promise<string | null> {
    const user = await getCurrentUser();
    if (!user) return null;
    return await user.getIdToken();
}
