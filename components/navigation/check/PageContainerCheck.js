import Navbar from "@components/navigation/check/NavbarAppCheck"
import SidePanel from "@components/navigation/SidePanelApp";
import Content from "@components/Content"
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



