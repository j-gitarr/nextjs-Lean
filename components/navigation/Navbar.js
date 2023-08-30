import styles from "@styles/Navbar.module.css"
import Link from "next/link";



function Navbar(){
    return (
        <nav className={styles.Navbar}>
            <img className={styles.Logo} src="../images/LEAA.png" alt="Logo"/>
            <Link href="/" className={styles.NavText}>Startseite </Link>
            <Link href="/about" className={styles.NavText}>Über </Link>
            <Link href="/services" className={styles.NavText}>Services </Link>
            <Link href="/contact" className={styles.NavText}>Kontakt </Link>
        </nav>
    );
}

export default Navbar;