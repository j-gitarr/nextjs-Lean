import PageContainer from "@components/navigation/app/PageContainerApp";
import Space from "@components/style/Space";
import Profile from "@components/utility/Profile";
import React, { useState } from "react";
import Link from "next/link";

export default function Erhebung() {

  const [blink, setBlink] = useState("");
  const isLocalStorageAvailable = typeof window !== "undefined" && window.localStorage;


  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Übersicht</h1>
      <Space Separator="true" />

      <main className="centeredMax800 ">
        <p className="spaceSideSM">
          <b>Wenn</b> Sie ihre Produktionsprozesse schlanker gestalten wollen,
          ist der erste Schritt das Sammeln von Daten. Durch eine zielgerichtete
          Sammlung von Prozess- und Belastungsdaten können
          Verschlankungspotenziale identifiziert und anschließend optimiert
          werden.
          <br />
          <br />
          Erfasst werden der EAWS-Score, die körperliche Anstrengung Ihrer
          Mitarbeiter durch die Borg-Skala, die erfahrenen Arbeitsbelastung
          Ihrer Mitarbeiter durch den "NASA Task Load Index" (NASA-TLX) und die
          psychische Belastung durch den Kurz-Fragebogen zur Arbeitsanalyse
          (KFZA) Ihrer Mitarbeiter.
          <br />
          <br />
          Jeder dieser Fragebogen ist wissenschaftlich evaluiert und erprobt.
        </p>
      </main>
      <Space className="backgroundJean" height="10px" margin="20vh 0 10vh 0" />
      <main className="centeredMax800">
        <h3>Ablauf</h3>
        <Space height="10vh" />
        <p>
          Um ein bestmögliches Ergebnis zu erzielen ist es sinnvoll das vorgehen
          zunächst mit einem unserer Lean Ergonomics Experten abzusprechen (
          <b><Link href="/contact" style={{color:"black", textDecoration:"none"}}>Kontakt</Link></b>).
          <br />
          <br />
          <b>Erheben: </b>Anschließend beginnt das Sammeln von Prozess-
          und Ergonomiedaten. Ein Teil der Daten müssen durch das
          Unternehmen selbst (z.b. Zykluszeiten) und ein anderer Teil durch die
          Mitarbeiter erhoben werden (z.B. subjektive Belastung).
          <br />
          <br />
          <b>Prüfen: </b>Ist die Datensammlung abgeschlossen, haben Sie
          anschließend die Möglichkeit die gesammelten Daten zu Prüfen, zu
          korrigieren, oder auch zu exportieren um diese anderweitig zu
          verarbeiten.
          <br />
          <br />
          <b>Analysieren:</b> Sobald Sie alle benötigten Daten erfasst haben,
          werden diese automatisch ausgewertet. Durch die Auswertung erhalten
          Sie nicht nur Einblick in die Stärken und Schwächen Ihres
          Produktionsprozesses, sondern auch in Ihre Mitarbeiter. Hier erfahren
          Sie, was Sie für Ihre Mitarbeiter ändern müssten, damit diese
          optimierte Arbeitsbedingungen erfahren und dadurch eine bessere
          Leistung erzielen. Durch eine optimale Steuerung der Belastung erhöht
          sich nicht nur die Mitarbeiterzufriedenheit, sondern auch die Güte
          betriebswirtschaftlicher Prozesse
        </p>
      </main>

      <a id="company"></a>
      <Space height="10vh" />

      <Link href={isLocalStorageAvailable && localStorage.getItem("companyName")?"/App/Insert":"#company"} 
      onClick={()=>{setBlink("blinking-border");
      setTimeout(()=>{
        setBlink("");
      }, 1000)}}>
      <Space height="5vh" className="backgroundJean" />
      <h3
        className="backgroundJean"
        style={{ width: "100%", margin: "0 auto", textAlign: "center", textDecoration:"none" }}
        
      >
        <b>Jetzt Starten</b>
      </h3>
      <Space height="5vh" className="backgroundJean" />
      </Link>

      <main className="centeredMax800">
        <Space height="10vh" />
        <a id="company"></a>
        <p className={blink}>
          Um direkt loszulegen, tragen Sie hier bitte den eindeutigen{" "}
          <b>Identifizierungscode</b> für Ihr Unternhemen ein:
        </p>
      </main>
      <Profile />

      <Space height="10vh" />
      <Space height="10vh" />
    </PageContainer>
  );
}
