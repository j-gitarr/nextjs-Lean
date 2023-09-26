import React from "react";
import PageContainer from "@components/navigation/analyze/PageContainerAnalyze";
import Build from "@components/utility/UnderConstruction";

export default function BuildAnalyze(){
    return(
        <PageContainer>
            <Build BarrierTape="enabled"/>
        </PageContainer>
    );
}