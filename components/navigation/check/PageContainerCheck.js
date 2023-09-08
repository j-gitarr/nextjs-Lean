import Navbar from "@components/navigation/check/NavbarAppCheck"
import SidePanel from "@components/navigation/SidePanelApp";
import Content from "@components/Content"
import style from "@styles/PageContainer.module.css"
import Footer from "@components/content/Footer";

export default function PageContainer({children}){
    return(
        <>
            <Navbar/>
            <div className={style.VerticalNextToContent}>
                <SidePanel/>
                <Content>{children}</Content>
            </div>
        </>
    );
}



