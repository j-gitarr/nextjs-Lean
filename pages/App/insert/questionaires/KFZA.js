import React, { useState } from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import SideBySide from "@components/style/SideBySide";
import content from "@public/text/KFZA.module.JSON";
import style from "@styles/KFZA.module.css";
import KFZAScale from "@components/KFZA/KFZAScale";
import SubmitButton from "@components/utility/SubmitButton";
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown"

export default function () {
  const [name, setName] = useState("");

  const [questionValues, setQuestionValues] = useState(
    content.questions.map((question) => ({ value: null }))
  );

  // Function to update the value for a specific question
  const handleQuestionValueChange = (index, value) => {
    const updatedValues = [...questionValues];
    // Update the value for the specified question
    updatedValues[index].value = value;
    // Update the state with the new values
    setQuestionValues(updatedValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEveryValueSet = questionValues.every(
      (question) => question.value !== null
    );

    if (name === "") {
      toast.warn("Bitte geben Sie noch Ihre Identifikationsnummer ein!");
      window.location.href = "#top";
      return;
    }
    if (!isEveryValueSet) {
      toast.warn("Bitte beantworten Sie alle Fragen!");
      return;
    }

    try {
      // Create an object with key-value pairs
      const dataToSend = {};
      questionValues.forEach((question, index) => {
        dataToSend[`question${index}`] = parseInt(question.value);
      });

      // Send the selected values to your MongoDB database via your API endpoint
      const response = await fetch("/api/submitKFZAValue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dataToSend, // Spread the key-value pairs directly in the body
          name: name,
          companyName: localStorage.getItem("companyName"),
        }),
      });

      if (response.ok) {
        toast.success("Antworten erfolgreich übermittelt");
      } else {
        console.error("Failed to submit value.");
      }
    } catch (error) {
      console.error("Error submitting value:", error);
    }
  };

  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>KFZA</h1>
      <Space height="10vh" />
      <a id="top"></a>

      <div className="backgroundJean">
        <Space height="20px" />
        <p className="centeredMax800  tcw">
          Der Kurz-Fragebogen zur Arbeitsanalyse (KFZA) ist ein
          arbeitspsychologischer Fragebogen, der 1995 von Jochen Prümper, Klaus
          Hartmannsgruber und Michael Frese als Instrument zur Ermittlung
          psychischer Belastungen in der Arbeitssituation entwickelt und
          veröffentlicht wurde. Es handelt sich um ein theoretisch fundiertes,
          standardisiertes, quantitatives Verfahren der Verhältnisprävention,
          welches bereits langjährig in der betrieblichen Praxis im Einsatz ist.
          -fragebogen-arbeitsanalyse.at
          <br />
          <br />
          Für jede Frage haben sie die Möglichkeit eines von fünf Feldern zu
          markieren. Bitte geben Sie zunächst Ihre persönliche
          Identifikationsnummer ein. Antworten Sie anschließend auf jede Frage
          und klicken Sie dann weiter unten auf Übermitteln, um die Daten zu
          Übermitteln.
        </p>
        <Space height="20px" />
      </div>

      <Space height="10vh" />
      <h4>PID: </h4>
      <ShortTextInput
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Ihre persönliche Identifikationsnummer..."
        height="5px"
        maxWidth="750px"
        background={"backgroundWhite"}
      />

      <Space height="10vh" />

      {content.questions.map((question, index) => (
        <div
          className={style.Row}
          style={{
            background: `${index % 2 === 0 ? "transparent" : "#e3e3e3"}`,
            width: "100%",
          }}
          key={index}
        >
          <SideBySide
            className={style.customContainer}
            firstItem={
              <ReactMarkdown style={{padding:"0"}}>
                {question.text}
                </ReactMarkdown>
            }
            secondItem={
              <KFZAScale
                index={index}
                label1={question.labels[0]}
                label2={question.labels[1]}
                label3={question.labels[2]}
                label4={question.labels[3]}
                label5={question.labels[4]}
                selectedValue={questionValues[index].value}
                onChange={(value) => handleQuestionValueChange(index, value)} // Callback to update the value
              />
            }
            flex2="1.5"
            flex="0.5"
          />
        </div>
      ))}

      <Space Separator="true" />

      <div
        style={{
          display: "flex",
          flex: "1",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Space height="40px" />
        <SubmitButton onSubmit={handleSubmit}>Übermitteln</SubmitButton>
        <br />
        <Space height="40px" />
      </div>
      <Space height="20vh" />
    </PageContainer>
  );
}
