import Link from "next/link";
import styles from "@styles/Navbar.module.css"
import { useRouter } from "next/router";


export default function SidePanel(){
    
    const router = useRouter();
    
    return(
        <div className={styles.sidePanel}>
            <Link href="/App/Erhebung" className={`
                ${styles.link} 
                ${styles.borderBot} 
                ${router.pathname ==="/App/Erhebung"? styles.NavTextCurrent:""}
            `}>
                Erheben
            </Link>
            
            <Link href="/App/Check" className={`
                ${styles.link} 
                ${styles.borderBot} 
                ${router.pathname ==="/App/Check"? styles.NavTextCurrent:""}
            `}>
                Prüfen
            </Link>
            <Link href="/App/Analysieren" className={`
                ${styles.link} 
                ${router.pathname ==="/App/Analysieren"? styles.NavTextCurrent:""}`}>
                Analysieren
            </Link>
        </div>
    );
}