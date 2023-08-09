import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import Content from "./Content";
import style from "../styles/PageContainer.module.css"




export default function PageContainer({children}){
    return(
        <>
            <Navbar/>
            <div class={style.VerticalNextToContent}>
                <SidePanel/>
                <Content>{children}</Content>
            </div>
        </>
    );
}



