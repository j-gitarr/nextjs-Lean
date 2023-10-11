import React, { useState } from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import content from "@public/text/Nasa-TLX.module.JSON";
import SideBySide from "@components/style/SideBySide";
import Scale from "@components/Scale";
import style from "@styles/NASA-TLX.module.css";
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";
import WorkstationDropdown from "@components/utility/WorkstationDropdown";

export default function () {
  const [name, setName] = useState("");
  const [workplace, setWorkplace] = useState("Arbeitsstation wählen...");

  const [mentalValue, setMentalValue] = useState(50);
  const [physicalValue, setPhysicalValue] = useState(50);
  const [temporalValue, setTemporalValue] = useState(50);
  const [performanceValue, setPerformanceValue] = useState(50);
  const [effortValue, setEffortValue] = useState(50);
  const [frustrationValue, setFrustrationValue] = useState(50);

  function handleMentalChange(event) {
    setMentalValue(Number(event.target.value));
  }

  function handlePhysicalChange(event) {
    setPhysicalValue(Number(event.target.value));
  }

  function handleTemporalChange(event) {
    setTemporalValue(Number(event.target.value));
  }
  function handlePerformanceChange(event) {
    setPerformanceValue(Number(event.target.value));
  }
  function handleEffortChange(event) {
    setEffortValue(Number(event.target.value));
  }
  function handleFrustrationChange(event) {
    setFrustrationValue(Number(event.target.value));
  }

  async function saveNASAValues() {
    if (!name) {
      toast.warn("Bitte geben Sie eine Identifikationsnummer ein");
      window.location.href = "#top";
      return;
    }
    if (!workplace || workplace === "Arbeitsstation wählen...") {
      toast.warn("Bitte geben Sie eine Arbeitsstation ein");
      window.location.href = "#top";
      return;
    }

    try {
      const response = await fetch("/api/submitNASAValues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mental: mentalValue,
          physical: physicalValue,
          temporal: temporalValue,
          performance: performanceValue,
          effort: effortValue,
          frustration: frustrationValue,
          name: name,
          workplace: workplace,
          companyName: localStorage.getItem("companyName"),
        }),
      });

      if (response.ok) {
        toast.success("Eingabe Erfolgreich");
        setName("");
        setMentalValue(50);
        setFrustrationValue(50);
        setPhysicalValue(50);
        setEffortValue(50);
        setTemporalValue(50);
        setPerformanceValue(50);
        window.location.href = "#top";
      } else {
        console.error("Failed to save values.");
        toast.error("Etwas hat nicht funktioniert");
      }
    } catch (error) {
      console.error("Error saving values:", error);
      toast.error("Etwas hat nicht funktioniert");
    }
  }

  return (
    <PageContainer>
      <a id="top"></a>
      <div>
        <Space height="10vh" />
        <h1>NASA-TLX</h1>
        <Space height="10vh" />

        <div className="backgroundJean">
          <Space height="20px" />
          <p className="centeredMax800  tcw">
            Der NASA-TLX dient zur Bewertung der wahrgenommenen kognitiven
            Belastung.
            <br />
            <br />
            Sie können für jede der Dimensionen einen Wert zwischen 0 und 100
            wählen, wobei 0 für gar keine Belastung und 100 für die höchste
            Belastung steht.
            <br />
            <br />
            Tragen Sie zunächst bitte Ihre <b>PID</b> (persönliche
            Identifikationsnummer) und Ihre derzeitige <b>Arbeitsstation</b>{" "}
            ein. Wählen Sie anschließend mit den Schiebereglern die Belastung
            hinsichtlich der verschiedenen Aspekte aus.
          </p>
          <Space height="20px" />
        </div>

        <Space height="10vh" />

        <SideBySide
          firstItem={
            <>
              <h4>PID: </h4>
              <ShortTextInput
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ihre persönliche Identifikationsnummer..."
                height="5px"
                maxWidth="750px"
                background={"white"}
              />
            </>
          }
          secondItem={
            <>
              <h4>Arbeitsstation: </h4>

              <div className="d-flex justify-content-center">
                <WorkstationDropdown
                  value={workplace}
                  onValueChange={setWorkplace}
                />
              </div>
            </>
          }
        />

        <Space height="20vh" />

        <h2 className={style.H2}>Geistige Anforderungen</h2>
        <Space height="30px" />
        <SideBySide
          firstItem={content.mentalText}
          secondItem={
            <Scale step="5" onChange={handleMentalChange} value={mentalValue} />
          }
        />
        <Space height="20vh" />

        <h2 className={style.H2}>Körperliche Anforderungen</h2>
        <Space height="30px" />
        <SideBySide
          firstItem={content.physicalText}
          secondItem={
            <Scale
              step="5"
              onChange={handlePhysicalChange}
              value={physicalValue}
            />
          }
        />
        <Space height="20vh" />

        <h2 className={style.H2}>Zeitliche Anforderungen</h2>
        <Space height="30px" />
        <SideBySide
          firstItem={content.temporalText}
          secondItem={
            <Scale
              step="5"
              onChange={handleTemporalChange}
              value={temporalValue}
            />
          }
        />
        <Space height="20vh" />

        <h2 className={style.H2}>Leistung</h2>
        <Space height="30px" />
        <SideBySide
          firstItem={content.performance}
          secondItem={
            <Scale
              step="5"
              lower="gut"
              upper="schlecht"
              onChange={handlePerformanceChange}
              value={performanceValue}
            />
          }
        />
        <Space height="20vh" />

        <h2 className={style.H2}>Anstrengung</h2>
        <Space height="30px" />
        <SideBySide
          firstItem={content.effort}
          secondItem={
            <Scale step="5" onChange={handleEffortChange} value={effortValue} />
          }
        />
        <Space height="20vh" />

        <h2 className={style.H2}>Frustration</h2>
        <Space height="30px" />
        <SideBySide
          firstItem={content.frustration}
          secondItem={
            <Scale
              step="5"
              onChange={handleFrustrationChange}
              value={frustrationValue}
            />
          }
        />
        <Space height="20vh" />

        <div className="backgroundJean tcw">
          <Space height="20px" />
          <p className=" centeredMax800 ">{content.annotation}</p>
          <Space height="20px" />
        </div>
        <Space height="10vh" />
      </div>

      <main>
        <button onClick={saveNASAValues} className="btn btn-primary btn-lg">
          Übermitteln
        </button>
      </main>

      <Space height="30vh" />
    </PageContainer>
  );
}
