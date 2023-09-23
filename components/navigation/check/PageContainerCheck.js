import Navbar from "@components/navigation/app/NavbarApp"
import Content from "@components/Content"
import style from "@styles/PageContainer.module.css"
import CheckCompanyName from "@components/utility/CheckCompanyName";

export default function PageContainer({children}){
    return(
        <>
            <CheckCompanyName/>
            <Navbar/>
            <div className={style.VerticalNextToContent}>
                <Content>{children}</Content>
            </div>
        </>
    );
}



