"use client";

import React from "react";
import styles from "./navbar.module.css";
import { usePathname, useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/Firebase";
import toast from "react-hot-toast";

const navItems = [
  { label: "Projects", path: "/dashboard/project" },
  { label: "Map", path: "/dashboard/map" },
  { label: "Analytics", path: "/dashboard/analytics" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout=async ()=>{
     await signOut(auth)
    //  router.push('/login');
     window.location.href = "/login"
      toast.success("Logged Out!");
  }

  return (
    <nav className={styles.navbar}>
      <div style={{display:"flex" ,justifyContent:"center",alignItems:"center" ,gap:"50px"}}>
      <div className={styles.logo}>Yello skye</div>
      <div className={styles.navItems}>
        {navItems.map(({ label, path }) => (
          <div
            key={path}
            className={`${styles.navItem} ${
              pathname.startsWith(path) ? styles.active : ""
            }`}
            onClick={() => router.push(path)}
          >
            {label}
          </div>
        ))}
      </div>
      </div>
      <div><IoIosLogOut style={{cursor:"pointer"}} onClick={handleLogout}/></div>
    </nav>
  );
}
