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
                href="/App/check/BuildCheck" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/App/check/BuildCheck"? styles.NavTextCurrent:""}`
            }>
                Überprüfen
            </Link>
            <Link 
                href="/App/check/BuildCheck" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="Same as Href"? styles.NavTextCurrent:""}`
                }
            >
                Korrigieren
            </Link>
            <Link 
                href="/App/check/BuildCheck" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="Same as Href"? styles.NavTextCurrent:""}`
                }
            >
                Exportieren 
            </Link>
        </nav>
    );
}

export default Navbar;