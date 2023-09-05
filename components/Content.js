import style from "../styles/PageContainer.module.css"

export default function Content({children}){
    return(
        <>
            <div className={style.content}>
                {children}
            </div> 

        </>
    )
}