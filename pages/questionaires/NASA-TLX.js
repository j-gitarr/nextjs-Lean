import React, {useState} from "react";
import PageContainer from "../../components/style/PageContainerApp";
import content from "../../public/text/Nasa-TLX.module.JSON"
import SideBySide from "../../components/style/SideBySide";
import Scale from "../../components/Scale";
import style from "../../styles/NASA-TLX.module.css"
import Space from "@components/style/Space";


export default function(){
    
    const [mentalValue, setMentalValue] = useState(0);
    const [physicalValue, setPhysicalValue] = useState(0);
    const [temporalValue, setTemporalValue] = useState(0);
    const [performanceValue, setPerformanceValue] = useState(0);
    const [effortValue, setEffortValue] = useState(0);
    const [frustrationValue, setFrustrationValue] = useState(0);

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
        console.log("values are: " + " " + mentalValue + " " + physicalValue + " " + temporalValue + " " + performanceValue + " " + effortValue + " " + frustrationValue)
        
        // try {
        //   const response = await fetch("/api/submitNASAValues", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       mental: mentalValue,
        //       physical: physicalValue,
        //       temporal: temporalValue,
        //       performance: performanceValue,
        //       effort: effortValue,
        //       frustration: frustrationValue,
        //     }),
        //   });
      
        //   if (response.ok) {
        //     alert("Values successfully saved!");
        //   } else {
        //     console.error("Failed to save values.");
        //   }
        // } catch (error) {
        //   console.error("Error saving values:", error);
        // }
      }
    
    
    
    return (
        <PageContainer>
            <div>
                <Space height="10vh"/>
                <h1>NASA-TLX</h1>
                <Space height="8vh"/>
                
                <div className="backgroundJean">
                    <Space height="20px"/>
                    <p className="center tcw">{content.introduction}</p>
                    <Space height="20px"/>
                </div>
                
                <Space height="10vh"/>
                
                <h2 className={style.H2}>Geistige Anforderungen</h2>
                <SideBySide 
                    firstItem={content.mentalText}
                    secondItem={<Scale step="5" onChange={handleMentalChange} value={mentalValue}/>}
                />
                <br/><br/>

                <h2 className={style.H2}>Körperliche Anforderungen</h2>
                <SideBySide 
                    firstItem={content.physicalText} 
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>

                <h2 className={style.H2}>Zeitliche Anforderungen</h2>
                <SideBySide
                    firstItem={content.temporalText}
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>

                <h2 className={style.H2}>Leistung</h2>
                <SideBySide
                    firstItem={content.performance}
                    secondItem={<Scale step="5" lower="gut" upper="schlecht"/>}
                />
                <br/><br/>

                <h2 className={style.H2}>Anstrengung</h2>
                <SideBySide
                    firstItem={content.effort}
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>

                <h2 className={style.H2}>Frustration</h2>
                <SideBySide
                    firstItem={content.frustration}
                    secondItem={<Scale step="5"/>}
                    />
                <br/><br/>
                
                <div className="backgroundJean tcw">
                    <Space height="20px"/>
                    <p className="Paragraph center">{content.annotation}</p>
                    <Space height="20px"/>
                </div>
                <Space height="10vh"/>
            </div>
            
            <button 
                onClick={saveNASAValues}
                className="btn btn-primary"
            >
                Save Values
            </button>

        </PageContainer>
    );
}