import styles from "../styles/Navbar.module.css"
import Link from "next/link";
import SidePanel from "./SidePanel";
import Logo from "../public/images/LOGO_Moutain_Croped.png";

function Navbar(){
    return (
        <nav className={styles.Navbar}>
            <img src="./LOGO_Moutain_Croped.png" alt="Logo"/>
            <Link href="/" className={styles.NavText}>Home </Link>
            <Link href="/about" className={styles.NavText}>About </Link>
            <Link href="/services" className={styles.NavText}>Services </Link>
            <Link href="/contact" className={styles.NavText}>Contact </Link>
        </nav>
    );
}

export default Navbar;