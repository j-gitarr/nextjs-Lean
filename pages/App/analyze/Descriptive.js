import React, {useEffect, useState} from "react";
import PageContainer from "@components/navigation/analyze/PageContainerAnalyze";
import Space from "@components/style/Space";
import useBorg from "@components/dbOps/getBorg"
// import BoxPlotChart from "@components/statistics/charts/BoxPlot";

import dynamic from "next/dynamic"; // Import dynamic from next/dynamic

const BoxPlotChart = dynamic(() => import("@components/statistics/charts/BoxPlot"), {
  ssr: false, // Set ssr to false to disable server-side rendering for this component
});


export default function Descriptive(){
    const borgValues = useBorg();
    const [transformedArray, setTransformedArray] = useState([]);

    // Use useEffect to fetch borgValues and calculate groupedByWorkplace when data is available
    useEffect(() => {
        if (borgValues) {
            const groupedByWorkplace = borgValues.reduce((result, entry) => {
              const workplace = entry.workplace;
              if (!result[workplace]) {
                result[workplace] = [];
              }
              result[workplace].push(parseInt(entry.value)); // Convert value to integer
              return result;
            }, {});
      
            // Transform grouped data into the desired format
            const transformedArray = Object.keys(groupedByWorkplace).map((workplace) => ({
              workplace,
              values: groupedByWorkplace[workplace],
            }));
      
            setTransformedArray(transformedArray);
            console.log(transformedArray)
          }
        }, [borgValues]);


    return(<PageContainer>
        
        <Space height="10vh"/>
            <h1>Deskriptive Analyse</h1>
        <Space Separator="true"/>

        <h2>EAWS</h2>


        <h2>Borg</h2>
            {borgValues? (
                <div className="centeredMax1000">
                    <BoxPlotChart rawDataPoints={transformedArray}
                        xLabel={"Borg Werte"}
                        chartHeightP={"50"}
                        transformedArray={transformedArray}
                    />
                </div>
            ):(
                "Laoding Data"
            )}
                
        
        <h2>NASA-TLX</h2>
        
        
        <h2>EAWS</h2>
        
        
        <h2>Eigene Kennwerte</h2>


    </PageContainer>);
}