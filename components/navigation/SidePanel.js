import Link from "next/link";
import styles from "@styles/Navbar.module.css"
import { useRouter } from "next/router";


export default function SidePanel(){
    
    const router = useRouter();
    
    return(
        <div class={styles.sidePanel}>
            <Link href="/questionaires/EAWS" className={`${styles.link} ${styles.borderBot} ${router.pathname ==="/questionaires/EAWS"? styles.NavTextCurrent:""}`}>EAWS</Link>
            <Link href="/questionaires/Borg" className={`${styles.link} ${styles.borderBot} ${router.pathname ==="/questionaires/Borg"? styles.NavTextCurrent:""}`} >BORG</Link>
            <Link href="/questionaires/NASA-TLX" className={`${styles.link} ${styles.borderBot} ${router.pathname ==="/questionaires/NASA-TLX"? styles.NavTextCurrent:""}`}>NASA-TLX</Link>
            <Link href="/questionaires/KFZA" className={`${styles.link} ${router.pathname ==="/questionaires/KFZA"? styles.NavTextCurrent:""}`}>KFZA</Link>
        </div>
    );
}