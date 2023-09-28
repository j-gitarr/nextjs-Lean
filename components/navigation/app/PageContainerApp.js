import Navbar from "@components/navigation/app/NavbarApp"
import Content from "@components/Content"
import style from "@styles/PageContainer.module.css"
import ToggleFullscreen from "@components/utility/ToggleFullscreen";

export default function PageContainer({children}){
    return(
        <ToggleFullscreen alwaysFull="nice">
            <Navbar/>
            <div className={style.VerticalNextToContent}>
                <Content>{children}</Content>
            </div>
        </ToggleFullscreen>
    );
}



