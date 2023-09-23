import Navbar from "./Navbar";
import Content from "../../Content";
import style from "@styles/PageContainer.module.css"




export default function PageContainer({children}){
    return(
        <>
            <Navbar/>
            <div className={style.VerticalNextToContent}>
                <Content>{children}</Content>
            </div>
        </>
    );
}



