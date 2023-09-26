import Navbar from "@components/navigation/app/NavbarApp"
import SidePanel from "@components/navigation/analyze/SidePanelAnal";
import Content from "@components/Content";
import style from "@styles/PageContainer.module.css"
import CheckCompanyName from "@components/utility/CheckCompanyName";

export default function PageContainer({children}){
    return(
        <>
            <CheckCompanyName/>
            <Navbar/>
            <div className={style.VerticalNextToContent}>
                <SidePanel/>
                <Content>{children}</Content>
            </div>
        </>
    );
}



