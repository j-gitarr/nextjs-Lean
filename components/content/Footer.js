import Space from "@components/style/Space";
import React from "react";
import style from "@styles/Footer.module.css"
import Link from "next/link";
import FireworksShow from "@components/utility/Fireworks";


const StylishLink = ({href, children, className}) =>(
    <Link href={href} className={`${style.customLink} ${className}`}>
        {children}
    </Link>
)


export default function Footer(){
    return(
        <div className="backgroundSoftGrey" style={{position:"sticky"}}>
            <Space height="20px"/>
            <div className={`${style.flexContainer}`}>


                
                <div className={`${style.flexItems} bold`}>
                    <div className={style.customCenter}>
                        <h3>LEA</h3>
                        <hr/>
                        <StylishLink href="/" className={style.singleIndent}>
                            Startseite</StylishLink><br/>
                        <StylishLink href="/about"className={style.singleIndent}>
                            Über</StylishLink><br/>
                        <StylishLink href="/services" className={style.singleIndent}>
                            Services</StylishLink><br/>
                        <StylishLink href="/contact" className={style.singleIndent}>
                            Kontakt</StylishLink><br/>
                    </div>
                </div>
                <div className={`${style.flexItems} bold`}>
                    <h3 >App</h3><hr/>
                    <div className={style.flexContainerInner}>
                        <div className={style.flexItems}>
                            <StylishLink href="/App/Erhebung" className={style.singleIndent}>
                                Erheben
                            </StylishLink><br/>
                            <StylishLink href="/App/insert/questionaires/EAWS" className={style.doubleIndent}>
                                EAWS
                            </StylishLink><br/>
                            <StylishLink href="/App/insert/questionaires/Borg" className={style.doubleIndent}>
                                BORG
                            </StylishLink><br/>
                            <StylishLink href="/App/insert/questionaires/NASA-TLX" className={style.doubleIndent}>
                                NASA-TLX
                            </StylishLink><br/>
                            <StylishLink href="/App/insert/questionaires/KFZA" className={style.doubleIndent}>
                                KFZA
                            </StylishLink><br/>
                            <StylishLink href="/App/insert/questionaires/Custom" className={style.doubleIndent}>
                                Eigene Prozessdaten
                            </StylishLink><br/>
                        </div>
                        <div className={style.flexItems}>
                            <StylishLink href="/App/Check" className={style.singleIndent}>
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
                            <StylishLink href="/App/Analysieren" className={style.singleIndent}>
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
                        {/* <FireworksShow/> */}
                    </div>
                </div>
            </div>
            <Space height="20px"/>
        </div>
    )
}


