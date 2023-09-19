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
                href="/App/analyze/Descriptive" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/App/analyze/BuildAnalyze"? styles.NavTextCurrent:""}`
            }>
                Deskriptiv
            </Link>
            <Link 
                href="" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/questionaires/Borg"? styles.NavTextCurrent:""}`
                    } >
                Explorativ
            </Link>
            <Link href="/App/analyze/BuildAnalyze" className={`${styles.NavText} ${styles.borderRight} ${router.pathname ==="/questionaires/NASA-TLX"? styles.NavTextCurrent:""}`}>
                Induktiv
            </Link>
        </nav>
    );
}

export default Navbar;