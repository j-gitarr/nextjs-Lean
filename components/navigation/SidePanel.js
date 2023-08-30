import Link from "next/link";
import styles from "@styles/Navbar.module.css"


export default function SidePanel(){
    return(
        <div class={styles.sidePanel}>
            <Link href="/questionaires/EAWS" class={styles.link}>EAWS</Link><br/>
            <Link href="/questionaires/Borg" className={styles.link} >BORG</Link><br/>
            <Link href="/questionaires/NASA-TLX" class={styles.link}>NASA-TLX</Link><br/>
            <Link href="/questionaires/KFZA" class={styles.link}>KFZA</Link><br/>
        </div>
    );
}