"use client";

import React from "react";
import styles from "./navbar.module.css";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Projects", path: "/dashboard/project" },
  { label: "Map", path: "/dashboard/map" },
  { label: "Analytics", path: "/dashboard/analytics" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
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
    </nav>
  );
}
