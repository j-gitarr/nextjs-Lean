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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import InfoExpandable from "@components/utility/InfoExpandable";
import StatisticsDialog from "@components/statistics/StatisticsDialog";

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
  const [eawsInfo, setEawsInfo] = useState(false);
  const [borgInfo, setBorgInfo] = useState(false);
  const [nasaInfo, setNasaInfo] = useState(false);
  const [kfzaInfo, setKfzaInfo] = useState(false);
  const [customInfo, setCustomInfo] = useState(false);

  const transformedArray = PrepBorg();
  const transformedNasa = PrepNASA();
  const transformedEaws = PrepEaws();
  const transformedKfza = useKfza();
  const transformedCustom = getCustom();

  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Deskriptive Analyse</h1>
      <Space height="4vh" />

      <div
        className="centeredMax1000"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link className="inPageLink" href="#eaws">
          EAWS
        </Link>
        <Link className="inPageLink" href="#borg">
          BORG
        </Link>
        <Link className="inPageLink" href="#nasa">
          NASA-TLX
        </Link>
        <Link className="inPageLink" href="#kfza">
          KFZA
        </Link>
        <Link className="inPageLink" href="#custom">
          Eigene Prozessdaten
        </Link>
      </div>

      <Space height="20px" />

      <div className="backgroundJean">
        <Space height="20px" />
        <div className="centeredMax800">
          <p>
            Hier finden Sie eine aktuelle quantitative Analyse all Ihrer
            erhobenen Daten und können daraus erste Erkenntnisse gewinnen. Ziel
            dieser Analyse ist es Ihre derzeitigen Prozesse, Arbeitsabläufe und
            -umgebungen quantitativ aus einer LE-Perspektive zu beschreiben.
            <br />
            <br />
            Bei Fragen und Unklarheiten unterstützt Sie gerne einer unserer
            LE-Experten. Weiterhin finden Sie zu jeder Auswertung eine kurze
            Beschreibung als auch Orientierungswerte, die empfohlen werden.
          </p>
        </div>
        <Space height="20px" />
      </div>

      <Space height="10vh" />

      <a id="eaws"></a>
      {transformedEaws ? (
        <div className="centeredMax1000">
          <BarPlot data={transformedEaws} />
        </div>
      ) : (
        "Loading Data"
      )}
      <div className="centeredContent">
        <HelpOutlineIcon
          fontSize="large"
          onClick={() => setEawsInfo(!eawsInfo)}
          className="helpIcon"
        />
      </div>
      <StatisticsDialog
        title="EAWS Info"
        open={eawsInfo}
        onClick={() => setEawsInfo(!eawsInfo)}
      >
        <p>
          <b>0-25 Punkte:</b> Keine oder nur geringes gesundheitliches Risiko.
          Es besteht kein Handlungsbedarf.
        </p>
        <br />
        <p>
          <b>&gt;25-50 Punkte:</b> Mögliches Risiko. 
          Eine Umgestaltung des Arbeitsplatzes oder andere Maßnahmen werden
          empfohlen.
        </p>
        <br />
        <p>
          <b>&gt;50 Punkte:</b> Hohes Risiko. Sofortige Maßnahmen zur werden Empfohlen.
        </p>
      </StatisticsDialog>

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
      <div className="centeredContent">
        <HelpOutlineIcon
          fontSize="large"
          onClick={() => setBorgInfo(!borgInfo)}
          className="helpIcon"
        />
      </div>
      <StatisticsDialog
        title="Borg Info"
        open={borgInfo}
        onClick={() => setBorgInfo(!borgInfo)}
      >
        <p>
          <b>6-8:</b> Sehr leicht - Aktivitäten, die fast keine Anstrengung
          erfordern, wie Sitzen oder Stehen. <br />
          <br />
          <b>9-11:</b> Leicht - Leichte Aktivitäten wie gemütliches Gehen.{" "}
          <br />
          <br />
          <b>12-14:</b> Moderat - Mäßige Anstrengung, bei der Sie sich bewegen,
          aber immer noch bequem sprechen können. <br />
          <br />
          <b>15-17:</b> Schwer - Anstrengende Aktivitäten, bei denen es
          schwierig wird, ein Gespräch aufrechtzuerhalten. <br />
          <br />
          <b>18-20:</b> Sehr schwer - Sehr intensive Aktivitäten, bei denen es
          schwer fällt zu atmen und zu sprechen. <br />
          <br />
          <br />
          Die Interpretation der Borg-Skala hängt von verschiedenen Faktoren ab,
          einschließlich des Alters, der Fitness und der individuellen
          Wahrnehmung. Die Skala ist subjektiv, daher kann derselbe Wert für
          verschiedene Personen unterschiedliche tatsächliche Anstrengungen
          bedeuten.
          <br />
          <br />
          Wichtig zu beachten ist, dass eine sehr leichte Anstrengung nicht
          zwangsläufig das Ziel sein sollte. Es kommt viel eher auf das
          Arbeitsumfeld, die Arbeitsaufgabe und den Mitarbeiter an.
          <br />
        </p>
      </StatisticsDialog>

      <Space Separator="true" />

      <a id="nasa"></a>
      {transformedNasa ? (
        <div className="centeredMax1000">
          <RadarPlot height="80" data={transformedNasa} />
          <div className="centeredContent">
            <HelpOutlineIcon
              fontSize="large"
              onClick={() => setNasaInfo(!nasaInfo)}
              className="helpIcon"
            />
          </div>
          <StatisticsDialog
            title="NASA-TLX Info"
            open={nasaInfo}
            onClick={() => setNasaInfo(!nasaInfo)}
          >
            <p>
              Ein höherer Dimensionswert steht für eine höhere Belastung
              innerhalb dieser Dimension. <br/>Grundsätzlich gibt es einen Bereich
              der optimalen Belastung. Welcher konkrete Zahlenwert in Ihrem jeweiligen
              Arbeitsbereich optimal ist, sollte individuell abgeklärt werden. 
              Als Orientierung können Sie einen Wert von 50 als Optimum betrachten.
            </p>
            <p>
              <b>Standardabweichungen </b>
              <br />
              Die Standardabweichung gibt die Streuung oder Variation von
              Datenpunkten in einer Datenmenge an. Sie gibt an, wie weit die
              einzelnen Datenwerte im Durchschnitt von dem mittleren Datenwert
              abweichen.
            </p>
          </StatisticsDialog>
          <Space height="5vh" />
          <h3>Standardabweichungen NASA-TLX</h3>
          <Space height="2vh" />
          <SummaryNasa data={transformedNasa} />
        </div>
      ) : (
        "Loading Data"
      )}

      <Space Separator="true" />

      <a id="kfza"></a>
      {/* <div className="centeredMax1000">
        <h3>KFZA Auswertung</h3>
      </div> */}
      <HeaderWithInfo>KFzA Auswertung</HeaderWithInfo>
      <div className="centeredContent">
        <HelpOutlineIcon
          fontSize="large"
          onClick={() => setKfzaInfo(!kfzaInfo)}
          className="helpIcon"
        />
      </div>
      <StatisticsDialog
        title="KFZA Info"
        open={kfzaInfo}
        onClick={() => setKfzaInfo(!kfzaInfo)}
      >
        <p>
          Je höher die einzelnen Werte des KFzA, desto besser werden diese
          Dimensionen von Ihren Mitarbeitern wahrgenommen. Als Richtwert gelten
          <b>&lt;2,5 als mangelhaft und &gt;3,5 als befriedigend.</b>
          <br />
          <br />
          <b>!Achtung</b> bei den Dimensionen{" "}
          <b>Qualitative Arbeitsbelastung,</b>{" "}
          <b>Quantitative Arbeitsbelastungen,</b> <b>Arbeitsunterbrechungen</b>{" "}
          und <b>Umgebungsbelastungen</b> gelten die Richtwerte:{" "}
          <b>&lt;1,5 als gut und &gt;2,5 als mangelhalft.</b> Hier ist die Skala
          umgedreht.
        </p>
      </StatisticsDialog>
      <Space height="20px"/>
      {transformedKfza.length !== 0 ? (
        <div className="centeredMax1000">
          <BoxPlotKfza data={transformedKfza} />
        </div>
      ) : null}
      <Space Separator="true" />

      <a id="custom"></a>
      <HeaderWithInfo>Eigen definierte Kennzahlen</HeaderWithInfo>
      <div className="centeredContent">
        <HelpOutlineIcon
          fontSize="large"
          onClick={() => setCustomInfo(!customInfo)}
          className="helpIcon"
        />
      </div>
      <StatisticsDialog
        title="Eigene Kennzahlen Info"
        open={customInfo}
        onClick={() => setCustomInfo(!customInfo)}
      >
        <p>
          Hier sehen Sie die Auswertung Ihrer selbst definierten Kennzahlen. Die
          Diagramme geben Ihnen Auskunft über die Streuung Ihrer Kennzahlen.
          Generell lässt sich sagen,{" "}
          <b>je geringer die Streuung, desto stabiler ist Ihr Prozess.</b> Was
          eine niedrige und hohe Streuung ist, sollte je nach Kennzahl mit einem
          Experten abgeklärt werden.
        </p>
      </StatisticsDialog>
      <Space height="20px"/>
      {transformedCustom.length !== 0 ? (
        <div className="centeredMax1000">
          <BoxPlotCustom data={transformedCustom} />
        </div>
      ) : null}

      <Space height="10vh" />
    </PageContainer>
  );
}
