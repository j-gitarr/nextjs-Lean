import styles from "@styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.Navbar}>
      <Link href="/">
        <div className={`${styles.LogoContainer} ${router.pathname === "/" ? styles.NavTextCurrent : ""}`}>
            <img
            src="/images/LEA_Logo_white.png"
            className={`${styles.Logo} `}
            href="/"
            />
        </div>
      </Link>
      <Link
        href="/"
        className={`
                    ${styles.NavText} 
                    ${styles.borderRight}
                    ${router.pathname === "/" ? styles.NavTextCurrent : ""}`}
      >
        Startseite
      </Link>
      <Link
        href="/about"
        className={`${styles.NavText} ${styles.borderRight} ${
          router.pathname === "/about" ? styles.NavTextCurrent : ""
        }`}
      >
        Über{" "}
      </Link>
      <Link
        href="/services"
        className={`${styles.NavText} ${styles.borderRight} ${
          router.pathname === "/services" ? styles.NavTextCurrent : ""
        }`}
      >
        Services{" "}
      </Link>
      <Link
        href="/contact"
        className={`${styles.NavText} ${
          router.pathname === "/contact" ? styles.NavTextCurrent : ""
        }`}
      >
        Kontakt{" "}
      </Link>
    </nav>
  );
}

export default Navbar;
