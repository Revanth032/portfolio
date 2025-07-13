"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathname = usePathname();
  return (
     <nav className={styles.navcontainer}>
           <Link className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`} href="/">About</Link>
          <Link className={`${styles.navLink} ${pathname === "/projects" ? styles.active : ""}`} href="/projects">Projects</Link>
           <Link className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`} href="/contact">Contact</Link>
        </nav>

  );
}