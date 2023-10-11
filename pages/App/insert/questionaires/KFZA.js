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
import ReactMarkdown from "react-markdown";

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
    let jumpTo;

    const isEveryValueSet = questionValues.every((question, index) => {
      if (question.value === null) {
        jumpTo = `#kfza${index}`;
        return false; // Return false to indicate that not every value is set
      }
      return true; // Return true for non-null values
    });

    if (name === "") {
      toast.warn("Bitte geben Sie noch Ihre Identifikationsnummer ein!");
      window.location.href = "#top";
      return;
    }
    if (!isEveryValueSet) {
      window.location.href = jumpTo;
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

        //Reset all values and jump to top...
        window.location.href = "#top";
        setQuestionValues(
          content.questions.map((question) => ({ value: null }))
        );
        setName("");
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
      <h1>KFzA</h1>
      <Space height="10vh" />
      <a id="top"></a>

      <div className="backgroundJean">
        <Space height="20px" />
        <p className="centeredMax800  tcw">
          Der Kurz-Fragebogen zur Arbeitsanalyse (KFzA) dient der Sammlung von
          Informationen über die Arbeitsanforderungen, Belastungen und
          Bedingungen in bestimmten Berufsumgebungen.
          Durch den Fragebogen soll die Wahrnehmung der Mitarbeiter über ihre
          Arbeit erfasst werden und Arbeitsbedingungen bewertet. <br />
          <br />
          Für jede Frage haben sie die Möglichkeit eines von fünf Feldern zu
          markieren. Bitte geben Sie zunächst Ihre <b>PID</b> (persönliche
          Identifikationsnummer) ein. Antworten Sie anschließend auf jede Frage
          und klicken Sie dann weiter unten auf <b>übermitteln</b>.
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
          <a id={"kfza" + index} />
          <SideBySide
            className={style.customContainer}
            firstItem={
              <ReactMarkdown style={{ padding: "0" }}>
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

<Space height="10vh"/>

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
