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
                href="/App/insert/questionaires/EAWS" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/App/insert/questionaires/EAWS"? styles.NavTextCurrent:""}`
            }>
                EAWS
            </Link>
            <Link 
                href="/App/insert/questionaires/Borg" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/App/insert/questionaires/Borg"? styles.NavTextCurrent:""}`} 
            >
                BORG
            </Link>
            <Link 
                href="/questionaires/NASA-TLX" 
                className={
                    `${styles.NavText} 
                    ${styles.borderRight} 
                    ${router.pathname ==="/App/insert/questionaires/NASA-TLX"? styles.NavTextCurrent:""}`}
            >
                NASA-TLX
            </Link>
            <Link 
                href="/App/insert/questionaires/KFZA" 
                className={
                    `${styles.NavText} 
                    ${router.pathname ==="/App/insert/questionaires/KFZA"? styles.NavTextCurrent:""}`}>
                KFZA
            </Link>
        </nav>
    );
}

export default Navbar;