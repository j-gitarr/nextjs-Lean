import style from "../styles/PageContainer.module.css"

export default function Content({children}){
    return(
        <>
            <div class={style.content}>
                {children}
            </div> 

        </>
    )
}