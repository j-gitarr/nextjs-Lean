import PageContainer from "@components/navigation/insert/PageContainerInsert";
import Space from "@components/style/Space";
import Profile from "@components/utility/Profile";
import React from "react";
import Link from "next/link";

export default function Erhebung() {
  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Erheben</h1>
      <Space Separator="true" />

      <main className="centeredMax800 ">
        <p className="spaceSideSM">
          Der erste Schritt zur Anwendung von Lean Ergonomics stellt die
          Erhebung relevanter Prozess- und Belastungsdaten dar. Dabei erlaubt
          Ihnen LEA die Erfassung folgender Daten:
          <br />
          <br />
          <Link href="/App/insert/questionaires/EAWS">
            <b>EAWS:</b> Dabei handelt es sich um einen von Experten erfassten
            Kennwert. Dieser kann mit anderen Werten korreliert werden, um die
            Aussagekraft zu erhöhen.
          </Link>
          <br />
          <br />
          <Link href="/App/insert/questionaires/Borg">
            <b>BORG:</b> Mit der Erfassung des Borg-Wertes können Sie
            mitarbeiter- und arbeitsstationsspezifisch die empfundene
            körperliche Belastung erfassen.
          </Link>
          <br />
          <br />
          <Link href="/App/insert/questionaires/NASA-TLX">
            <b>NASA-TLX:</b> Die Erfassung des NASA-TLX erlaubt Ihnen, die
            subjektiv erfahrene Arbeitsbeanspruchung Ihrer Mitarbeiter nach
            Arbeitsstation zu analysieren.
          </Link>
          <br />
          <br />
          <Link href="/App/insert/questionaires/KFZA">
            <b>KFzA:</b> Mit dem KFzA können Sie die psychische Belastung auf
            Ihre Mitarbeiter für den gesamten Arbeitsplatz erfassen.
          </Link>
          <br />
          <br />
          <Link href="/App/insert/questionaires/Custom">
            <b>Custom:</b> Weiterhin haben Sie die Möglichkeit, eigene Kennwerte
            zu definieren und zu erfassen.
          </Link>
          <br />
          <br />
          <br />
          Beachten Sie: Je mehr Daten Sie sammeln, desto aussagekräftigere
          Erkenntnisse erlangen Sie aus der Analyse der Daten und desto wahrscheinlicher
          können Verbesserungs- und Einsparpotentiale erkannt werden.
        </p>
      </main>
      
      <Space height="5vh"/>
      <Space height="5vh" className="backgroundJean" />
      <h3
        className="backgroundJean"
        style={{ width: "100%", margin: "0 auto", textAlign: "center", textDecoration:"none" }}
        
      >
        <b>Wählen Sie unten oder an der Seite einen Bereich, um die Erhebung zu starten</b>
      </h3>
      <Space height="5vh" className="backgroundJean" />
      <Space height="5vh"/>


      <div
        className="centeredMax1000"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Link className="inPageLink" href="/App/insert/questionaires/EAWS">
          EAWS
        </Link>
        <Link className="inPageLink" href="/App/insert/questionaires/Borg">
          BORG
        </Link>
        <Link className="inPageLink" href="/App/insert/questionaires/NASA-TLX">
          NASA-TLX
        </Link>
        <Link className="inPageLink" href="/App/insert/questionaires/KFZA">
          KFzA
        </Link>
        <Link className="inPageLink" href="/App/insert/questionaires/Custom">
          Eigene Prozessdaten
        </Link>
      </div>

      {/* <Space height="5vh" className="backgroundJean" />
      <h3
        className="backgroundJean"
        style={{ width: "100%", margin: "0 auto", textAlign: "center" }}
      >
        <b>Jetzt Starten</b>
      </h3>
      <Space height="5vh" className="backgroundJean" />

      <main className="centeredMax800">
        <Space height="10vh" />
        <p>
          Um direkt <b>loszulegen</b>, tragen Sie hier bitte den eindeutigen{" "}
          <b>Identifizierungscode</b> für Ihr Unternhemen ein:
        </p>
      </main>
      <Profile /> */}

      <Space height="10vh" />
      <Space height="10vh" />
    </PageContainer>
  );
}
