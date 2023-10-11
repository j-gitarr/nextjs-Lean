import Space from "@components/style/Space";
import React from "react";
import style from "@styles/Footer.module.css";
import Link from "next/link";
import FireworksShow from "@components/utility/Fireworks";
import ConfettiButton from "@components/playground/ConfettiChild";
import { useCompany } from "@components/context/CompanyContext";

const StylishLink = ({ href, children, className }) => (
  <Link href={href} className={`${style.customLink} ${className}`}>
    {children}
  </Link>
);

const isLocalStorageAvailable = typeof window !== "undefined" && window.localStorage;

export default function Footer() {
  const {companyName, setCompanyName} = useCompany();
  
  return (
    <div className="backgroundSoftGrey" style={{ position: "sticky" }}>
      <Space height="20px" />
      <div className={`${style.flexContainer}`}>
        <div className={`${style.flexItems} bold`}>
          <div className={style.customCenter}>
            <Link href="/" className={style.customLink}>
              <h3>LEA</h3>
            </Link>
            <hr />
            <StylishLink href="/" className={style.singleIndent}>
              Startseite
            </StylishLink>
            <br />
            <StylishLink href="/about" className={style.singleIndent}>
              Über
            </StylishLink>
            <br />
            <StylishLink href="/services" className={style.singleIndent}>
              Services
            </StylishLink>
            <br />
            <StylishLink href="/contact" className={style.singleIndent}>
              Kontakt
            </StylishLink>
            <br />
          </div>
        </div>
        <div className={`${style.flexItems} bold`}>
          <Link href="/App" className={style.customLink}>
            <h3>App</h3>
            <hr />
          </Link>
          {companyName?(
          <div className={style.flexContainerInner}>
            <div className={style.flexItems}>
              <StylishLink href="/App/Insert" className={style.singleIndent}>
                Erheben
              </StylishLink>
              <br />
              <StylishLink
                href="/App/insert/questionaires/EAWS"
                className={style.doubleIndent}
              >
                EAWS
              </StylishLink>
              <br />
              <StylishLink
                href="/App/insert/questionaires/Borg"
                className={style.doubleIndent}
              >
                BORG
              </StylishLink>
              <br />
              <StylishLink
                href="/App/insert/questionaires/NASA-TLX"
                className={style.doubleIndent}
              >
                NASA-TLX
              </StylishLink>
              <br />
              <StylishLink
                href="/App/insert/questionaires/KFZA"
                className={style.doubleIndent}
              >
                KFZA
              </StylishLink>
              <br />
              <StylishLink
                href="/App/insert/questionaires/Custom"
                className={style.doubleIndent}
              >
                Eigene Prozessdaten
              </StylishLink>
              <br />
            </div>
            <div className={style.flexItems}>
              <StylishLink href="/App/Check" className={style.singleIndent}>
                Überprüfen
              </StylishLink>
              <br />
            </div>
            <div className={style.flexItems}>
              <StylishLink
                href="/App/Analysieren"
                className={style.singleIndent}
              >
                Analysieren
              </StylishLink>
              <br />
              <StylishLink
                href="/App/analyze/Descriptive"
                className={style.doubleIndent}
              >
                Deskriptiv
              </StylishLink>
              <br />
              <StylishLink
                href="/App/analyze/BuildAnalyze"
                className={style.doubleIndent}
              >
                Explorativ
              </StylishLink>
              <br />
              <StylishLink
                href="/App/analyze/BuildAnalyze"
                className={style.doubleIndent}
              >
                Induktiv
              </StylishLink>
              <br />
            </div>
          </div>

          ):(null)}
        </div>
        <div className={`${style.flexItems}`}>
          <div className={`${style.verticallyCenter}`}>
            
            <ConfettiButton>
                ©2023 Jerome Fürst

            </ConfettiButton>
            
          </div>
        </div>
      </div>
      <Space height="20px" />
    </div>
  );
}
