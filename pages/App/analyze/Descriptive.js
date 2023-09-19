import React, {useEffect, useState} from "react";
import PageContainer from "@components/navigation/analyze/PageContainerAnalyze";
import Space from "@components/style/Space";
import getBorg from "@components/dbOps/getBorg"


export default function Descriptive(){
    const borgValues = getBorg();
    const [eawsValues, setEawsValues] = useState();
    const [nasaValues, setNasaValues] = useState();
    const [kfzaValues, setKfzaValues] = useState();
    const [customValues, setCustomValues] = useState();
    const a = [1,2,3,4,45];


    return(<PageContainer>
        <Space height="10vh"/>
            <h1>Deskriptive Analyse</h1>
        <Space Separator="true"/>

        <h2>EAWS</h2>


        <h2>Borg</h2>
        <p>
            {borgValues? (
                borgValues.map(item =>(
                <span key={item.id}>{item.value}</span>
                ))
            ):(
                "Laoding Data"
            )}
                
        </p>
        
        <h2>NASA-TLX</h2>
        
        
        <h2>EAWS</h2>
        
        
        <h2>Eigene Kennwerte</h2>


    </PageContainer>);
}