import Link from "next/link";
import styles from "@styles/Navbar.module.css"
import { useRouter } from "next/router";



export default function SidePanel(){
    
    const router = useRouter();
    
    return(
        <div className={styles.sidePanel}>
                <Link
                    href="/App/Erhebung"
                    className={styles.linkVerticalApp}
                >
                    <div className={styles.textVertical}>
                        Starten Sie jetzt mit LEA
                    </div>
                </Link>
        </div>
    );
}