import Link from "next/link";
import styles from "@styles/Navbar.module.css";
import { useRouter } from "next/router";

export default function SidePanel() {
  const router = useRouter();
  const linkEAWS = "/App/insert/questionaires/EAWS";
  const linkBorg = "/App/insert/questionaires/Borg";
  const linkNASA = "/App/insert/questionaires/NASA-TLX";
  const linkKFZA = "/App/insert/questionaires/KFZA";
  const linkCustom = "/App/insert/questionaires/Custom";

  return (
    <div className={styles.sidePanel}>
      <Link
        href={linkEAWS}
        className={`
                ${styles.linkVerticalApp} 
                ${styles.borderBot} 
                ${
                  router.pathname === linkEAWS
                    ? styles.NavTextCurrent
                    : ""
                }
            `}
      >
        <div className={styles.textVertical}>EAWS</div>
      </Link>

      <Link
        href={linkBorg}
        className={`
                ${styles.linkVerticalApp} 
                ${styles.borderBot} 
                ${router.pathname === linkBorg ? styles.NavTextCurrent : ""}
            `}
      >
        <div className={styles.textVertical}>Borg</div>
      </Link>
      <Link
        href={linkNASA}
        className={`
                ${styles.linkVerticalApp} 
                ${styles.borderBot} 
                ${router.pathname === linkNASA ? styles.NavTextCurrent : ""}
            `}
      >
        <div className={styles.textVertical}>NASA-TLX</div>
      </Link>
      <Link
        href={linkKFZA}
        className={`
                ${styles.linkVerticalApp} 
                ${styles.borderBot} 
                ${router.pathname === linkKFZA ? styles.NavTextCurrent : ""}
            `}
      >
        <div className={styles.textVertical}>KFZA</div>
      </Link>
      <Link
        href={linkCustom}
        className={`
                ${styles.linkVerticalApp} 
                ${
                  router.pathname === linkCustom
                    ? styles.NavTextCurrent
                    : ""
                }`}
      >
        <div className={styles.textVertical}>Custom</div>
      </Link>
    </div>
  );
}
