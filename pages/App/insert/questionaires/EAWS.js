import { useState } from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import { toast } from "react-toastify";
import Space from "@components/style/Space";
import Link from "next/link";
import WorkstationDropdown from "@components/utility/WorkstationDropdown";

export default function EAWS() {
  const [eawsScore, setEawsScore] = useState(""); // State to store the EAWS Score
  const [workplace, setWorkplace] = useState("Arbeitsstation wählen...");

  const handleEawsScoreChange = (event) => {
    setEawsScore(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (eawsScore == "") {
      toast.warn("kein Wert eingetragen!");
      return;
    } else if (workplace == "" || workplace === "Arbeitsstation wählen...") {
      toast.warn("keine Arbeitsstation ausgewählt");
    } else {
      try {
        const response = await fetch("/api/create-EAWS-entry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: eawsScore,
            workplace: workplace,
            companyName: localStorage.getItem("companyName"),
          }),
        });
        if (response.ok) {
          toast.success("Wert erfolgreich gespeichert");
          // Reset the input after submission
          setEawsScore("");
          setWorkplace("Arbeitsstation wählen...");
        } else {
          console.error("Failed to create entry");
        }
      } catch (error) {
        console.error("Error creating entry:", error);
      }
    }
  };

  //LAYOUT
  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>EAWS</h1>
      <Space height="10vh" />

      <div className="backgroundJean">
        <Space height="20px" />

        <p className="centeredMax800 SpaceSideSM tcw">
          Das Ergonomic Assessment Worksheet (EAWS) ist ein Expertenverfahren
          zur Bewertung von körperlicher Belastung. Dabei werden Punkte für
          Belastungsarten vergeben, welche aggregiert und nach einem Ampelschema
          bewertet werden (grün &lt; 26p, gelb &lt; 51p, rot &gt; 50p).<br/> <br/>
          Die
          Bewertungsgrundlagen des EAWS entstammen internationalen (ISO),
          europäischen (CEN) und nationalen (DIN) Normen; (inter-)national
          anerkannten Bewertungsverfahren und einschlägigen Literaturquellen
          (z.B. Publikationen, Dissertationen). Das EAWS kann als „Papier- und
          Bleistiftmethode“ oder IT-gestützt über den kompletten
          Produktentstehungsprozess eingesetzt werden. -iad TU Darmstadt
          <br />
          <br />
          Der von Ihnen oder einem Experten ermittelte EAWS-Wert wird im
          unteren Feld eingetragen und hilft bei der Verschlankung und
          Optimierung Ihrer Prozesse.
        </p>
        <Space height="20px" />
      </div>

      <Space height="20vh" />

      <div>
        <h5 className="text-center" style={{ fontWeight: "normal" }}>
          Für welche <b>Arbeitsstation</b> wurde dieser Wert erhoben?
        </h5>
        <div className="d-flex justify-content-center">
          <WorkstationDropdown value={workplace} onValueChange={setWorkplace} />
        </div>
        <Space height="10vh" />
        <h5 className="text-center" style={{ fontWeight: "normal" }}>
          Bitte tragen Sie hier den ermittelten <b>EAWS Score </b>ein:
        </h5>
        <div className="d-flex justify-content-center">
          <input
            type="number"
            className="form-control form-control-lg"
            value={eawsScore}
            onChange={handleEawsScoreChange}
            style={{ width: "300px" }}
          />
        </div>
        <br />
      </div>

<Space height="5vh"/>

      <div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={handleFormSubmit}
          >
            Übermitteln
          </button>
        </div>
      </div>

      <Space height="10vh" />
    </PageContainer>
  );
}
