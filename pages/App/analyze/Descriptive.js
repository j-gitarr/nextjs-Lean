import React, { useEffect, useState } from "react";
import PageContainer from "@components/navigation/analyze/PageContainerAnalyze";
import Space from "@components/style/Space";
import PrepBorg from "@components/statistics/prep/PrepBorg";
import PrepNASA from "@components/statistics/prep/PrepNasa";
import PrepEaws from "@components/statistics/prep/PrepEaws";
import useKfza from "@components/dbOps/getKfza";
import SummaryNasa from "@components/statistics/calculation/SummaryNASA";
import getCustom from "@components/dbOps/getCustom";

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
      <Space Separator="true" />
      <p>TODO hier ist some text</p>
      <Space Separator="true" />

      <h2>EAWS</h2>
      {transformedEaws ? (
        <div className="centeredMax1000">
          <BarPlot data={transformedEaws} />
        </div>
      ) : (
        "Loading Data"
      )}

      <Space Separator="true" />

      <h2>Borg</h2>
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
        "Laoding Data"
      )}

      <Space Separator="true" />

      <h2>NASA-TLX</h2>
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

      <h2>KFZA</h2>
      {transformedKfza.length !== 0 ? (
        <div className="centeredMax1000">
          <BoxPlotKfza data={transformedKfza} />
        </div>
      ) : null}
      <Space Separator="true" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center horizontally
        }}
      >
        <h2 style={{ marginRight: "10px", padding: "0" }}>Eigene Kennwerte</h2>
        <InfoExpandable>
          Bitte beachten Sie, dass mindestens 4 Datenpunkte pro Feld vorhanden
          sein müssen um eine sinnvolle auswertung durchzufürhen.
        </InfoExpandable>
      </div>
      {transformedCustom.length !== 0 ? (
        <div className="centeredMax1000">
          <BoxPlotCustom data={transformedCustom} />
        </div>
      ) : null}
    </PageContainer>
    
  );
}
