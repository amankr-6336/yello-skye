"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../lib/firebase/Firebase";
import { signOut } from "firebase/auth";

export default function DashboardPage() {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user]);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.email}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
