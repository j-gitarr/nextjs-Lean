import Link from "next/link";
import styles from "@styles/Navbar.module.css"
import { useRouter } from "next/router";
import ToggleFullscreen from "@components/utility/ToggleFullscreen";



export default function SidePanel(){
    
    const router = useRouter();
    
    return(
        <div className={styles.sidePanelVertical}>
            <ToggleFullscreen>
                <Link
                    href="/App/Erhebung"
                    className={styles.link}
                >
                    <div className={styles.linkVertical}>
                        Starten Sie jetzt mit LEA
                    </div>
                </Link>
            </ToggleFullscreen>
        </div>
    );
}