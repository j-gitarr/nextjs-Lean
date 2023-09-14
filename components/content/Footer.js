import Space from "@components/style/Space";
import React from "react";
import style from "@styles/Footer.module.css"
import Link from "next/link";


const StylishLink = ({href, children, className}) =>(
    <Link href={href} className={`${style.customLink} ${className}`}>
        {children}
    </Link>
)


export default function Footer(){
    return(
        <div className="backgroundSoftGrey" style={{position:"sticky"}}>
            <Space height="20px"/>
            <div class={`${style.flexContainer}`}>


                
                <div class={`${style.flexItems} bold`}>
                    <div className={style.customCenter}>
                        <h3>LEA</h3>
                        <hr/>
                        <StylishLink href="" className={style.singleIndent}>
                            Startseite</StylishLink><br/>
                        <StylishLink href=""className={style.singleIndent}>
                            Über</StylishLink><br/>
                        <StylishLink href="" className={style.singleIndent}>
                            Services</StylishLink><br/>
                        <StylishLink href="" className={style.singleIndent}>
                            Kontakt</StylishLink><br/>
                    </div>
                </div>
                <div class={`${style.flexItems} bold`}>
                    <h3 >App</h3><hr/>
                    <div className={style.flexContainerInner}>
                        <div className={style.flexItems}>
                            <StylishLink href="" className={style.singleIndent}>
                                Erheben
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                EAWS
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                BORG
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                NASA-TLX
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                KFZA
                            </StylishLink><br/>
                        </div>
                        <div className={style.flexItems}>
                            <StylishLink href="" className={style.singleIndent}>
                                Überprüfen
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                Korrigieren
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                Exportieren
                            </StylishLink><br/>
                        </div>
                        <div className={style.flexItems}>
                            <StylishLink href="" className={style.singleIndent}>
                                Analysieren
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                A1
                            </StylishLink><br/>
                            <StylishLink href="" className={style.doubleIndent}>
                                A2
                            </StylishLink><br/>
                        </div>
                    </div>
                </div>
                <div className={`${style.flexItems}`}>
                    <div className={`${style.verticallyCenter}`}>
                        ©2023 Jerome Fürst  
                    </div>
                </div>
            </div>
            <Space height="20px"/>
        </div>
    )
}


