import Navbar from "./Navbar";
import SidePanel from "@components/navigation/home/SidePanel";
import Content from "../../Content";
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



