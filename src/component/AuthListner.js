"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase/Firebase";

export default function AuthListener() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();

        // Set cookie accessible to middleware, path /
        document.cookie = `firebaseToken=${token}; path=/; SameSite=Lax; Secure;`;

      } else {
        // Clear cookie when logged out
        document.cookie = "firebaseToken=; Max-Age=0; path=/;";
      }
    });

    return () => unsubscribe();
  }, []);

  return null;
}
