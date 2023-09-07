import Navbar from "../navigation/Navbar";
import SidePanel from "../navigation/SidePanel";
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



