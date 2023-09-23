import PageContainer from "@components/navigation/app/PageContainerApp";
import Space from "@components/style/Space";
import Profile from "@components/utility/Profile";
import React from "react";


export default function Erhebung(){
    return(
        <PageContainer>
            <Space height="10vh"/>
                <h1>Übersicht</h1>
            <Space Separator="true"/>

            <main className="centeredMax800 ">
                <p className="spaceSideSM">
                    <b>Wenn</b> Sie ihre Produktionsprozesse schlanker gestalten wollen ist der erste Schritt
                    das Sammeln von Daten. 
                    
                    Durch eine zielgerichtete Sammlung von Prozessdaten und Kennwerten können Verschlankungspotenziale 
                    identifiziert und anschließend optimiert werden. 
                    <br/><br/>
                    Erfasst werden der "Ergonomic Assessment Work Sheet" (EAWS) Wert, 
                    die körperliche Anstrengung Ihrer Mitarbeiter durch die Borg-Skala, 
                    die erfahrenen Arbeitsbelastung Ihrer Mitarbeiter durch den 
                    "NASA Task Load Index" (NASA-TLX) und 
                    die psychische Belastung durch den Kurz-Fragebogen zur Arbeitsanalyse 
                    (KFZA) Ihrer Mitarbeiter. 
                    <br/><br/>
                    Jeder dieser Fragebogen ist wissenschaftlich evaluiert und erprobt. 
                </p>
            </main>
                <Space className="backgroundJean" height="10px" margin="20vh 0 10vh 0"/>
            <main className="centeredMax800">
                <h3>Ablauf</h3>
                <Space height="10vh"/>
                <p>
                    Um ein bestmögliches Ergebnis zu erzielen ist es sinnvoll 
                    das vorgehen zunächst mit einem unserer Lean Ergonomics Experten abzusprechen (<b>CONTACT TODO</b>).
                    <br/><br/>                    
                    <b>Erheben: </b>Aschnließend beginnt das Sammeln von prozessbezogenen und personenbezogenen Daten. 
                    Ein Teil der Daten müssen durch das Unternehmen selbst (z.b. Zykluszeiten) 
                    und ein anderer Teil durch die Mitarbeiter erhoben werden (z.B. subjektive Belastung).
                    <br/><br/>      
                    <b>Prüfen: </b>Ist die Datensammlung abgeschlossen, haben Sie anschließend die Möglichkeit die gesammelten Daten
                    zu Prüfen, zu korrigieren, oder auch zu exportieren um diese anderweitig zu verarbeiten. 
                    <br/><br/>      
                    <b>Analysieren: </b>Sobald Sie alle benötigten Daten erfasst haben, werden diese automatisch ausgewertet.
                    Durch die Auswertung erhalten Sie nicht nur Einblick in die Stärken und Schwächen des Produktionsprozesses, 
                    sondern auch in Ihre Mitarbeiter. Der beste Produktionsprozess ist nur so schnell, wie der Schwächste Mitarbeiter. 
                    Hier erfahren Sie was einerseits für Ihre Mitarbeiter ändern müssen, damit diese weniger Belastung erhfahren und dadurch 
                    eine bessere Leistung erzielen. 
                    Durch eine optimale steuerung der Belastung erhöht sich nicht nur die Mitarbeiterzufriedenheit und Prozessqualität,
                    zusätzlich werden Prozesse in Ihrer Qualität stabiler und die Wahrscheinlichkeit für Qualitätsschwankung sinkt. 
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
                <p>Um direkt loszulegen, tragen Sie hier bitte den eindeutigen <b>Identifizierungscode</b> für Ihr Unternhemen ein:</p>
            </main>
                <Profile/>
            
            <Space height="10vh"/>
            <Space height="10vh"/>

        </PageContainer>
    )
    
}