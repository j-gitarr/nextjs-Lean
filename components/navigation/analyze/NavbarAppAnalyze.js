import styles from "@styles/Navbar.module.css"
import Link from "next/link";
import { useRouter } from "next/router";


function Navbar(){
    
    const router = useRouter();
    
    return (
        <nav className={styles.Navbar}>
            <Link href="/">
                <img src="/images/LEA_Logo_white.png" className={styles.Logo} href="/"/>
            </Link>
            <Link 
                href="/App/analyze/BuildAnalyze" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/App/analyze/BuildAnalyze"? styles.NavTextCurrent:""}`
            }>
                AnalyzeTest
            </Link>
            <Link 
                href="" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/questionaires/Borg"? styles.NavTextCurrent:""}`
                    } >
                Analyze2
            </Link>
            <Link href="/App/analyze/BuildAnalyze" className={`${styles.NavText} ${styles.borderRight} ${router.pathname ==="/questionaires/NASA-TLX"? styles.NavTextCurrent:""}`}>
                Analyze3
            </Link>
            <Link href="/App/analyze/BuildAnalyze" className={`${styles.NavText} ${router.pathname ==="/questionaires/KFZA"? styles.NavTextCurrent:""}`}>
                Analyze4
            </Link>
        </nav>
    );
}

export default Navbar;