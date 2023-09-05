import Navbar from "../navigation/NavbarApp";
import SidePanel from "../navigation/SidePanelApp";
import Content from "../Content";
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



