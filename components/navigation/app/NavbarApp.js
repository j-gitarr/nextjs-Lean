import styles from "@styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const isInsert = router.pathname.startsWith("/App/insert");
  const isCheck = router.pathname.startsWith("/App/check");
  const isAnal = router.pathname.startsWith("/App/analyze");
  const linkApp = "/App";
  const linkErhebung = "/App/Insert";
  const linkCheck = "/App/Check";
  const linkAnalyze = "/App/Analysieren";

  return (
    <nav className={styles.Navbar}>
        <Link href="/App">
          <div
            className={`${styles.LogoContainer} ${
              router.pathname === "/App" ? styles.NavTextCurrent : ""
            }`}
          >
            <img
              src="/images/LEA_Logo_white.png"
              className={`${styles.Logo} `}
              href="/"
            />
          </div>
        </Link>
        <Link
          href={linkApp}
          className={`${styles.NavText} 
                    ${styles.borderRight} 
                    ${
                      router.pathname === linkApp ? styles.NavTextCurrent : ""
                    }`}
        >
          Start
        </Link>
      <Link
        href={linkErhebung}
        className={`${styles.NavText} 
                    ${styles.borderRight} 
                    ${
                      router.pathname === linkErhebung || isInsert
                        ? styles.NavTextCurrent
                        : ""
                    }`}
      >
        Erheben
      </Link>
      <Link
        href={linkCheck}
        className={`${styles.NavText} 
                    ${styles.borderRight} 
                    ${
                      router.pathname === linkCheck || isCheck
                        ? styles.NavTextCurrent
                        : ""
                    }`}
      >
        Prüfen
      </Link>
      <Link
        href={linkAnalyze}
        className={`${styles.NavText} 
                    ${
                      router.pathname === linkAnalyze || isAnal
                        ? styles.NavTextCurrent
                        : ""
                    }`}
      >
        Analysieren
      </Link>
    </nav>
  );
}

export default Navbar;
