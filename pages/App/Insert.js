import PageContainer from "@components/navigation/insert/PageContainerInsert";
import Space from "@components/style/Space";
import Profile from "@components/utility/Profile";
import React from "react";


export default function Erhebung(){
    return(
        <PageContainer>
            <Space height="10vh"/>
                <h1>Erheben</h1>
            <Space Separator="true"/>

            <main className="centeredMax800 ">
                <p className="spaceSideSM">
                Der erste Schritt zur Anwendung von Lean Ergonomics stellt die Erhebung relevanter Prozess- und Belastungsdaten dar. Dabei erlaubt Ihnen LEA die Erfassung folgender Daten: 
<br/><br/>
<b>EAWS:</b> Dabei handelt es sich um einen von Experten erfassten Kennwert. Dieser kann mit anderen Werten korreliert werden, um die Aussagekraft zu erhöhen. 
<br/><br/>
<b>BORG:</b> Mit der Erfassung des Borg-Wertes können Sie mitarbeiter- und arbeitsstationsspezifisch die empfundene Körperliche Belastung erfassen.
<br/><br/>
<b>NASA-TLX:</b> Die Erfassung des NASA-TLX erlaubt Ihnen die subjektiv erfahrene Arbeitsbeanspruchung Ihrer Mitarbeiter nach Arbeitsstation zu analysieren. 
<br/><br/>
<b>KFZA:</b> Mit dem KFZA können Sie die psychische Belastung auf ihre Mitarbeiter für den gesamten Arbeitsplatz erfassen. 
<br/><br/>
<b>Custom:</b> Weiterhin haben Sie die Möglichkeit eigene Kennwerte zu definieren und zu erfassen. 
<br/><br/><br/>
Beachten Sie, je mehr Daten Sie sammeln, desto aussagekräftigere Erkenntnisse erlangen Sie aus der Analyse der Daten und desto eher können Verbesserungs- und Einsparpotentiale erkannt werden. 

                </p>
            </main>
            

            <a id="company"></a>
            <Space height="10vh"/>

            <Space height="5vh" className="backgroundJean"/>
            <h3  className="backgroundJean" style={{width:"100%", margin:"0 auto", textAlign:"center"}}>
                <b>Jetzt Starten</b>
            </h3>
            <Space height="5vh" className="backgroundJean"/>
            
            <main className="centeredMax800">
                <Space height="10vh"/>
                <p>Um direkt <b>loszulegen</b>, tragen Sie hier bitte den eindeutigen <b>Identifizierungscode</b> für Ihr Unternhemen ein:</p>
            </main>
                <Profile/>
            
            <Space height="10vh"/>
            <Space height="10vh"/>

        </PageContainer>
    )
    
}