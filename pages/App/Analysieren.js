import PageContainer from "@components/navigation/analyze/PageContainerAnalyze";
import Build from "@components/utility/UnderConstruction";
import React from "react";
import Space from "@components/style/Space";
import Link from "next/link";

export default function Analyze() {
  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Analysieren</h1>
      <Space Separator="true" />
      <main className="centeredMax800">
        <p>
          Wenn Sie bereits Daten erhoben haben, können Sie hier ihre Daten
          analysieren. Ihnen stehen dafür verschiedene Mittel bereit:
        </p>
        <p>
          <b>Deskriptive Analyse: </b>wie sind Ihre Daten verteilt? Wo ist der
          Mittelwert? Wie streuen die Daten? Z.B. empfinden alle Mitarbeiter die
          Belastung gleich oder gibt es starke Unterschiede von Mitarbeiter zu
          Mitarbeiter?
        </p>
        <p>
          <b>Explorative Analyse: </b> Welche Faktoren stehen miteinander in
          Zusammenhang? Führt z.B. eine erhöhte Taktzeit zu einer höheren
          Beanspruchung, oder führt eine zu niedrige Taktzeit zu einer zu geringen
          Beanspruchung?
        </p>
        <p>
          <b>Induktive Analyse und Handlungsempfehlung: </b>Welchen allgemeinen
          Aufschluss liefern Ihnen die erhobenen Daten? Was kann grundlegend
          über die Ergonomie in Ihrem Unternehmen gesagt werden? Was kann/muss
          geändert werden, um einerseits eine bessere Gesamtsystemleistung und
          andererseits eine bessere Mitarbeiterzufriedenheit zu erzielen? Wie
          hoch fällt das potentielle Return of Interest aus?
        </p>

        <Space height="40px" />
        <Link href="/App/analyze/Descriptive">
          <button className="btn btn-primary">Mit der Analyse starten</button>
        </Link>
      </main>

      <Space height="10vh" />
    </PageContainer>
  );
}
