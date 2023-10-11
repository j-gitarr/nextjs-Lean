import styles from "@styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Settings from "@components/Settings";
import { useCompany } from "@components/context/CompanyContext";

function Navbar() {
  const router = useRouter();

  const {companyName, setCompanyName} = useCompany();

  const isInsert = router.pathname.startsWith("/App/insert");
  const isCheck = router.pathname.startsWith("/App/check");
  const isAnal = router.pathname.startsWith("/App/analyze");
  const linkApp = "/App";
  const linkErhebung = "/App/Insert";
  const linkCheck = "/App/Check";
  const linkAnalyze = "/App/Analysieren";


  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleCloseSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

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

      {companyName ? (
        <>
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
        ${styles.borderRight} 
                    ${
                      router.pathname === linkAnalyze || isAnal
                        ? styles.NavTextCurrent
                        : ""
                    }`}
          >
            Analysieren
          </Link>
        </>
      ) : null}

      <div className={styles.Settings}>
        <FontAwesomeIcon
          icon={faSliders}
          style={{ fontSize: "5vh" }}
          onClick={handleCloseSettings}
        />
        <Settings open={settingsOpen} handleClose={handleCloseSettings} />
      </div>
    </nav>
  );
}

export default Navbar;
