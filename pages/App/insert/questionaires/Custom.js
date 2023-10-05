import React, { useState } from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";
import WorkstationDropdown from "@components/utility/WorkstationDropdown";
import CustomValueDropdown from "@components/utility/CustomValueDropdown";
import Link from "next/link";

export default function Borg() {
  const [selectedValue, setSelectedValue] = useState(0); // State to store the selected value
  const [valueName, setValueName] = useState("Kennwertname wählen...");
  const [workplace, setWorkplace] = useState("Arbeitsstation wählen...");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!workplace || workplace === "Arbeitsstation wählen...") {
      toast.warn("Bitte wählen Sie eine Arbeitsstaion");
      window.location.href = "#top";
      return;
    }
    if (!valueName) {
      toast.warn("Bitte geben Sie einen Namen für den Wert ein.");
      window.location.href = "#top";
      return;
    }
    if (
      selectedValue === null ||
      selectedValue === "" ||
      selectedValue === undefined
    ) {
      toast.warn("Bitte wählen Sie einen Wert aus");
      return;
    }

    try {
      // Send the selected value to your MongoDB database via your API endpoint
      const response = await fetch("/api/submitCustomValue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: selectedValue,
          valueName: valueName,
          workplace: workplace,
          companyName: localStorage.getItem("companyName"),
        }),
      });

      if (response.ok) {
        toast.success("Wert erfolgreich übermittelt");
        // Clear the selected value after submission
        setSelectedValue("");
        // setValueName("");
        // setWorkplace("");
        window.location.href = "#choose";
      } else {
        console.error("Failed to submit value.");
      }
    } catch (error) {
      console.error("Error submitting value:", error);
    }
  };

  return (
    <PageContainer>
      <form onSubmit={handleFormSubmit}>
        <Space height="10vh" />
        <h1>Eigene Prozessdaten</h1>
        <Space height="10vh" />

        <div className="backgroundJean">
          <Space height="20px" />
          <p className="centeredMax800  tcw">
            Hier haben Sie die Möglichkeit eigene Betriebswissenschaftliche
            Kennzahlen aufzunehmen. Je mehr Daten Sie beisteuern, desto eher
            können Potentiale ermittelt werden. Tragen Sie dafür in die
            Felder unten die Arbeitsstation ein, von welcher die Kennzahl
            stammt, den Namen der Kennzahl und den Wert.
            <br />
            <br />
            Im Schritt Analysieren werden Ihre Daten statistisch analysiert und
            mit anderen Werten korreliert, um Zusammenhänge zu identifizieren
            und ihnen mögliche Handlungsempfehlungen zu präsentieren.
          </p>
          <a id="choose"></a>
          <Space height="20px" />
        </div>

        <Space height="10vh" />

        <div className="centeredContent">
          <p style={{ margin: "0", fontSize: "1.25rem", maxWidth:"800px"}}>
            Wählen Sie hier die aktuelle <b>Arbeitsstation</b> aus, oder
            definieren Sie eine neue Arbeitsstation
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <WorkstationDropdown value={workplace} onValueChange={setWorkplace} />
        </div>

        <Space height="10vh" />

        <div className="centeredContent">
          <p style={{ margin: "0", fontSize: "1.25rem", maxWidth:"800px"}}>
            Wählen Sie den <b>Namen der Kennzahl</b> aus, oder definieren Sie
            eine neue Kennzahl
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <CustomValueDropdown value={valueName} onValueChange={setValueName} />
        </div>

        <Space height="10vh" />

        <div className="centeredContent">
          <p style={{ margin: "0", fontSize: "1.25rem", maxWidth:"800px"}}>
            Geben Sie hier bitte den <b>Wert</b> der Kennzahl ein
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <ShortTextInput
            type="number"
            value={selectedValue}
            onChange={(event) => setSelectedValue(event.target.value)}
            placeholder=""
            height="5px"
            maxWidth="750px"
            background={"white"}
          />
        </div>

        <Space height="8vh" />

        <div style={{ display: "flex", justifyContent: "center", gap:"20px"}}>
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Übermitteln
          </button>
        </div>
      </form>

      <div style={{display: "flex", justifyContent: "center"}}>
      </div>

      <Space height="20vh" />
    </PageContainer>
  );
}
