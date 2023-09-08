import Navbar from "@components/navigation/insert/NavbarAppInsert"
import SidePanel from "@components/navigation/SidePanelApp";
import Content from "@components/Content"
import style from "@styles/PageContainer.module.css"

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



