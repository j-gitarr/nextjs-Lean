import Navbar from "@components/navigation/app/NavbarApp"
import SidePanel from "@components/navigation/insert/SidePanelInsert";
import Content from "@components/Content"
import style from "@styles/PageContainer.module.css"
import CheckCompanyName from "@components/utility/CheckCompanyName";
import ToggleFullscreen from "@components/utility/ToggleFullscreen";

export default function PageContainer({children}){
    return(
        <ToggleFullscreen alwaysFull="true"> 
            <CheckCompanyName/>
            <Navbar/>
            <div className={style.VerticalNextToContent}>
                <SidePanel/>
                <Content>{children}</Content>
            </div>
        </ToggleFullscreen>
    );
}



