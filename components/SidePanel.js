import Link from "next/link";
import styles from "../styles/PageContainer.module.css"


export default function SidePanel(){
    return(
        <div class={styles.sidePanel}>
            <Link href="/questionaires/EAWS" class={styles.test}>EAWS</Link><br/>
            <Link href="/questionaires/Borg" className={styles.test} >BORG</Link><br/>
            <Link href="/questionaires/NASA-TLX" class={styles.test}>NASA-TLX</Link><br/>
            <Link href="/questionaires/KFZA" class={styles.test}>KFZA</Link><br/>
        </div>
    );
}