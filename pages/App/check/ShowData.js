import React, { useState, useEffect } from "react";
import PageContainer from "@components/navigation/check/PageContainerCheck";
import Space from "@components/style/Space";
import BorgData from "@components/utility/check/BorgData"
import NasaTLXData from "@components/utility/check/NasaTLXData"
import KFZAData from "@components/utility/check/KFZAData"
import EawsData from "@components/utility/check/EawsData"

export default function ShowData() {
  return (
    <PageContainer>
        <Space height="10vh" />
        <h1>Überprüfen Sie Ihre Daten</h1>
        <Space Separator="true" />
        <h2>EAWS</h2>
        <EawsData/>

        <Space height="10vh" />

        <h2>BORG</h2>
        <BorgData/>
        
        <Space height="10vh" />

        <h2>NASA-TLX</h2>
        <NasaTLXData/>

        <Space height="10vh" />

        <h2>KFZA</h2>
        <KFZAData/>

    </PageContainer>
  );
}
