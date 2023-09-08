import style from "../styles/PageContainer.module.css"
import Footer from "@components/content/Footer"

export default function Content({children}){
    return(
        <>
            <div className={style.content}>
                {children}
                <Footer/>
            </div> 
        </>
    )
}