import Space from "@components/style/Space";
import Navbar from "../components/navigation/home/Navbar";
import PageContainer from "../components/navigation/home/PageContainer";

export default function About(){
    return(
        <PageContainer>
            <main>
            
            <Space height="10vh"/>
            
            <h1>Was ist Lean Ergonomics?</h1>

            <Space height="10vh"/>
            <Space height="10px" color="#617784" width="100%"/>
            <Space height="10vh"/>
            <div className="centeredMax800 spaceSideSM">
                <p>Stell dir ein Betrieb vor, der die Arbeitsbedingungen für die Mitarbeiter kontinuierlich verbessert. Der seine Mitarbeiter versteht und die stärken und schwächen jedes Mitarbeiters optimal nutzt. In diesem Betrieb müssen sich Arbeiter nicht an einen Arbeitsplatz anpassen, der Arbeitsplatz passt sich an sie an. </p>

                <Space height="10vh"/>

                <p>Stell dir weiterhin vor, dass dieses Unternehmen nach den Methoden und Konzepten der Verschlankung (Lean) vorgeht und somit, durch die Minimierung von Arbeitsabläufen, die Wertschöpfungskette maximiert. Überflüssige Arbeitsschritte werden weggelassen und essentielle Arbeitsschritte optimiert. </p>
                
                <Space height="10vh"/>
                
                <p>In diesem Unternehmen wird gerne gearbeitet, denn jeder Mitarbeiter weiß, dass das Management ihn Berücksichtigt und seinen Arbeitsplatz verbessert. Zudem wird in diesem Unternehmen effizienter gearbeitet und in gleicher Zeit mehr geleistet. </p>
                
                <Space height="10vh"/>
                
                <p>Das ist Lean Ergonomics </p>
                
                <p><em>- Die Zukunft der Unternehmensführung </em></p>
            </div>
            </main>
        </PageContainer>
    )
};