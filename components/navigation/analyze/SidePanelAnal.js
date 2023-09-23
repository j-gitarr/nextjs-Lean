import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import { useRouter } from "next/router";

export default function SidePanel() {
  const router = useRouter();
  const linkDesc = "/App/analyze/Descriptive";
  const linkExpl = "/App/analyze/BuildAnalyze";
  const linkInduc = "/App/analyze/BuildAnalyze";

  return (
    <div className={styles.sidePanel}>
      <Link
        href={linkDesc}
        className={`
                ${styles.linkVerticalApp} 
                ${styles.borderBot} 
                ${
                  router.pathname === linkDesc
                    ? styles.NavTextCurrent
                    : ""
                }
            `}
      >
        <div className={styles.textVertical}>Deskriptiv</div>
      </Link>

      <Link
        href={linkExpl}
        className={`
                ${styles.linkVerticalApp} 
                ${styles.borderBot} 
                ${router.pathname === linkExpl ? styles.NavTextCurrent : ""}
            `}
      >
        <div className={styles.textVertical}>Explorativ</div>
      </Link>
      <Link
        href={linkInduc}
        className={`
                ${styles.linkVerticalApp} 
                ${
                  router.pathname === linkInduc
                    ? styles.NavTextCurrent
                    : ""
                }`}
      >
        <div className={styles.textVertical}>Induktiv</div>
      </Link>
    </div>
  );
}
