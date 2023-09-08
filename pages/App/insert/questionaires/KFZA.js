import React,{useState} from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import SideBySide from "@components/style/SideBySide";
import content from "@public/text/KFZA.module.JSON"
import style from "@styles/KFZA.module.css"
import KFZAScale from "@components/KFZA/KFZAScale"
import SubmitButton from "@components/utility/SubmitButton";
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";
import GlobalToast from "@components/GlobalToast";
import Link from "next/link";


export default function(){ 
    
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

        const isEveryValueSet = questionValues.every((question) => question.value !== null);

        if(name === ""){
            toast.warn("Bitte geben Sie noch Ihre Identifikationsnummer ein!")
        }
        if (!isEveryValueSet) {
            toast.warn("Bitte beantworten Sie alle Fragen!");
            return;
        }

        try {

            // Create an array of objects with question index and value
            const dataToSend = questionValues.map((question, index) => ({
                index,
                value: parseInt(question.value),
            }));

            console.log("values are:" + questionValues.map((question, index)=>({
                index, 
                value: parseInt(question.value),
            }).value))

            // Send the selected value to your MongoDB database via your API endpoint
            const response = await fetch("/api/submitKFZAValue", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    questionValues: dataToSend, 
                    name:name, 
                    companyName:localStorage.getItem("companyName")}),
            });
      
            if (response.ok) {
              toast.success("Antworten erfolgreich übermittelt");
            } else {
              console.error("Failed to submit value.");
            }
          } catch (error) {
            console.error("Error submitting value:", error);
          }
    }
    
    
    return(
        <PageContainer>
            
            <Space height="10vh"/>
                <h1>KFZA</h1>
            <Space height="10vh"/>

            <div className="backgroundJean">
                    <Space height="20px"/>
                    <p className="center tcw">TODO INTRODUCTION</p>
                    <Space height="20px"/>
                </div>

            <ShortTextInput 
                    value={name} 
                    onChange={(event)=>setName(event.target.value)}
                    placeholder="Geben Sie hier bitte ihre identifikationsnummer ein..."
                    height="5px"
                    maxWidth="750px"        
            />
            
            <Space height="10vh"/>

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
                    firstItem={<p>{index + 1}. {question.text}</p>}
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

            <div className="backgroundJean" style={{ display: "flex", flex:"1", justifyContent: "center", flexDirection:"column"}}>
                <Space height="40px"/>
                <SubmitButton onSubmit={handleSubmit}>
                    Bestätigen
                </SubmitButton><br/>
                <Space height="40px"/>
            </div>
            <Space height="20vh"/>
        <GlobalToast/>
        </PageContainer>
    );
}
