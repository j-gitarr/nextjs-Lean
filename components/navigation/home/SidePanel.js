import Link from "next/link";
import styles from "@styles/Navbar.module.css"
import { useRouter } from "next/router";
import ToggleFullscreen from "@components/utility/ToggleFullscreen";



export default function SidePanel(){
    
    const router = useRouter();
    
    return(
        <div className={styles.sidePanel}>
            <ToggleFullscreen>
                <Link
                    href="/App/Erhebung"
                    className={styles.linkVerticalApp}
                >
                    <div className={styles.textVertical}>
                        Starten Sie jetzt mit LEA
                    </div>
                </Link>
            </ToggleFullscreen>
        </div>
    );
}