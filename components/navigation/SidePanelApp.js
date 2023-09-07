import Link from "next/link";
import styles from "@styles/Navbar.module.css"
import { useRouter } from "next/router";


export default function SidePanel(){
    
    const router = useRouter();
    
    return(
        <div className={styles.sidePanel}>
            <Link href="/App/Erhebung" className={`
                ${styles.linkVerticalApp} 
                ${styles.borderTop} 
                ${router.pathname ==="/App/Erhebung"? styles.NavTextCurrent:""}
            `}>
                <div className={styles.textVertical}>Erheben</div>
            </Link>
            
            <Link href="/App/Check" className={`
                ${styles.linkVerticalApp} 
                ${styles.borderTop} 
                ${router.pathname ==="/App/Check"? styles.NavTextCurrent:""}
            `}>
                <div className={styles.textVertical}>Prüfen</div>
            </Link>
            <Link href="/App/Analysieren" className={`
                ${styles.linkVerticalApp} 
                ${router.pathname ==="/App/Analysieren"? styles.NavTextCurrent:""}`}>
                <div className={styles.textVertical}>Analysieren</div>
            </Link>
        </div>
    );
}