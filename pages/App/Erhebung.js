import PageContainer from "@components/style/PageContainerApp";
import Space from "@components/style/Space";
import Profile from "@components/utility/Profile";
import Build from "@components/utility/UnderConstruction";
import React from "react";


export default function Erhebung(){
    return(
        <PageContainer>
            <Build/>
            <Space height="10vh"/>
            <Profile/>
            <Space height="10vh"/>

        </PageContainer>
    )
    
}