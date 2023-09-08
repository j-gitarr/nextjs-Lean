import React, {useState, useEffect} from "react";
import PageContainer from "../../../../components/style/PageContainerApp";
import content from "../../public/text/Nasa-TLX.module.JSON"
import SideBySide from "../../../../components/style/SideBySide";
import Scale from "../../../../components/Scale";
import style from "../../styles/NASA-TLX.module.css"
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";
import GlobalToast from "@components/GlobalToast";
import { SP } from "next/dist/shared/lib/utils";


export default function(){

    
    const [name, setName] = useState("");

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

    function handleTemporalChange(event){
        setTemporalValue(Number(event.target.value));
    }
    function handlePerformanceChange(event){
        setPerformanceValue(Number(event.target.value));
    }
    function handleEffortChange(event){
        setEffortValue(Number(event.target.value));
    }
    function handleFrustrationChange(event){
        setFrustrationValue(Number(event.target.value));
    }

    async function saveNASAValues() {
        if (!name) {
            toast.warn("Bitte geben Sie eine Identifikationsnummer ein");
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
              companyName:localStorage.getItem("companyName"),
            }),
          });
      
          if (response.ok) {
            toast.info("Eingabe Erfolgreich");
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
            <div>
                <Space height="10vh"/>
                <h1>NASA-TLX</h1>
                <Space height="10vh"/>

                <div className="backgroundJean">
                    <Space height="20px"/>
                    <p className="center tcw">{content.introduction}</p>
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
                
                <h2 className={style.H2}>Geistige Anforderungen</h2>
                <SideBySide 
                    firstItem={content.mentalText}
                    secondItem={
                        <Scale step="5" onChange={handleMentalChange} value={mentalValue}/>
                    }
                />
                <br/><br/>

                <h2 className={style.H2}>Körperliche Anforderungen</h2>
                <SideBySide 
                    firstItem={content.physicalText} 
                    secondItem={
                        <Scale step="5" onChange={handlePhysicalChange} value={physicalValue}/>
                    }
                />
                <br/><br/>

                <h2 className={style.H2}>Zeitliche Anforderungen</h2>
                <SideBySide
                    firstItem={content.temporalText}
                    secondItem={
                        <Scale step="5" onChange={handleTemporalChange} value={temporalValue}/>
                    }
                />
                <br/><br/>

                <h2 className={style.H2}>Leistung</h2>
                <SideBySide
                    firstItem={content.performance}
                    secondItem={
                        <Scale step="5" 
                            lower="gut"
                            upper="schlecht" 
                            onChange={handlePerformanceChange} 
                            value={performanceValue}/>
                    }
                />
                <br/><br/>

                <h2 className={style.H2}>Anstrengung</h2>
                <SideBySide
                    firstItem={content.effort}
                    secondItem={
                        <Scale step="5" onChange={handleEffortChange} value={effortValue}/>
                    }
                />
                <br/><br/>

                <h2 className={style.H2}>Frustration</h2>
                <SideBySide
                    firstItem={content.frustration}
                    secondItem={
                        <Scale step="5" onChange={handleFrustrationChange} value={frustrationValue}/>
                    }
                />
                <br/><br/>
                
                <div className="backgroundJean tcw">
                    <Space height="20px"/>
                    <p className="Paragraph center">{content.annotation}</p>
                    <Space height="20px"/>
                </div>
                <Space height="10vh"/>
            </div>
            
            <main>
                <button 
                    onClick={saveNASAValues}
                    className="btn btn-primary btn-lg"
                >
                    Save Values
                </button>

            </main>

            <Space height="30vh"/>

        <GlobalToast/>
        </PageContainer>
    );
}