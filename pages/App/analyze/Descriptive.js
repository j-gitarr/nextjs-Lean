import React, { useEffect, useState } from "react";
import PageContainer from "@components/navigation/analyze/PageContainerAnalyze";
import Space from "@components/style/Space";
import PrepBorg from "@components/statistics/prep/PrepBorg";
import PrepNASA from "@components/statistics/prep/PrepNasa";
import PrepEaws from "@components/statistics/prep/PrepEaws";
import useKfza from "@components/dbOps/getKfza";
import SummaryNasa from "@components/statistics/calculation/SummaryNASA";
import getCustom from "@components/dbOps/getCustom";
import Link from "next/link";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import InfoExpandable from "@components/utility/InfoExpandable";

const BoxPlotChart = dynamic(
  () => import("@components/statistics/charts/BoxPlot"),
  {
    ssr: false, // Set ssr to false to disable server-side rendering for this component
  }
);
const RadarPlot = dynamic(
  () => import("@components/statistics/charts/RadarPlot"),
  {
    ssr: false,
  }
);
const BarPlot = dynamic(
  () => import("@components/statistics/charts/BarPlotEaws"),
  {
    ssr: false,
  }
);
const BoxPlotKfza = dynamic(
  () => import("@components/statistics/charts/BoxPlotKfza"),
  {
    ssr: false,
  }
);

const BoxPlotCustom = dynamic(
  () => import("@components/statistics/charts/BoxPlotCustom"),
  {
    ssr: false,
  }
);

function HeaderWithInfo({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center horizontally
      }}
    >
      <h2 style={{ marginRight: "10px", padding: "0" }}>{children}</h2>
      <InfoExpandable>
        Bitte beachten Sie, dass mindestens 4 Datenpunkte pro Feld vorhanden
        sein müssen, um eine sinnvolle Auswertung durchzuführen.
      </InfoExpandable>
    </div>
  );
}

export default function Descriptive() {
  const transformedArray = PrepBorg();
  const transformedNasa = PrepNASA();
  const transformedEaws = PrepEaws();
  const transformedKfza = useKfza();
  const transformedCustom = getCustom();

  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Deskriptive Analyse</h1>
      <Space height="4vh"/>
      
      <div className="centeredMax1000" style={{display: "flex", justifyContent:"space-between"}}>
        <Link className="inPageLink" href="#eaws">EAWS</Link>
        <Link className="inPageLink" href="#borg">BORG</Link>
        <Link className="inPageLink" href="#nasa">NASA-TLX</Link>
        <Link className="inPageLink" href="#kfza">KFZA</Link>
        <Link className="inPageLink" href="#custom">Eigene Prozessdaten</Link>
      </div>

      <Space height="20px"/>

      <div className="backgroundJean">
      <Space height="20px"/>
      <div className="centeredMax800">
        <p>
          Hier finden Sie eine aktuelle quantitative Analyse all Ihrer erhobenen
          Daten und können daraus erste Erkenntnisse gewinnen. Ziel dieser
          Analyse ist es Ihre derzeitigen Prozesse, Arbeitsabläufe und
          -umgebungen quantitativ aus einer LE-Perspektive zu beschreiben. 
          <br/>
          <br/>
          Bei
          Fragen und Unklarheiten unterstützt Sie gerne einer unserer
          LE-Experten. Weiterhin finden Sie zu jeder Auswertung eine kurze
          Beschreibung als auch Orientierungswerte, die empfohlen werden.
        </p>
      </div>
      <Space height="20px"/>
      </div>

      <Space height="10vh"/>

      <a id="eaws"></a>
      {transformedEaws ? (
        <div className="centeredMax1000">
          <BarPlot data={transformedEaws} />
        </div>
      ) : (
        "Loading Data"
      )}
      <div className="centeredContent"><HelpOutlineIcon fontSize="large" /></div>

      <Space Separator="true" />


      {/* BORG */}
      <a id="borg"></a>
      {transformedArray ? (
        <div className="centeredMax1000">
          <BoxPlotChart
            rawDataPoints={transformedArray}
            xLabel={"Borg Werte"}
            chartHeightP={"50"}
            transformedArray={transformedArray}
          />
        </div>
      ) : (
        "Loading Data"
      )}
      <HeaderWithInfo></HeaderWithInfo>

      <Space Separator="true" />

      {/* <h2>NASA-TLX</h2> */}
      <a id="nasa"></a>
      {transformedNasa ? (
        <div className="centeredMax1000">
          <RadarPlot data={transformedNasa} />
          <Space height="10vh" />
          <SummaryNasa data={transformedNasa} />
        </div>
      ) : (
        "Loading Data"
      )}

      <Space Separator="true" />

      <a id="kfza"></a>
      <div className="centeredMax1000">
        <h3>KFZA Auswertung</h3>
      </div>
      {transformedKfza.length !== 0 ? (
        <div className="centeredMax1000">
          <BoxPlotKfza data={transformedKfza} />
        </div>
      ) : null}
      <HeaderWithInfo></HeaderWithInfo>
      <Space Separator="true" />

      <a id="custom"></a>
      <HeaderWithInfo>Eigen definierte Kennzahlen</HeaderWithInfo>
      {transformedCustom.length !== 0 ? (
        <div className="centeredMax1000">
          <BoxPlotCustom data={transformedCustom} />
        </div>
      ) : null}

      <Space height="10vh" />
    </PageContainer>
  );
}
