import React from "react";
import PageContainer from "@components/navigation/check/PageContainerCheck"
import Build from "@components/utility/UnderConstruction";
import Space from "@components/style/Space";
import Link from "next/link";


export default function Check(){
    return(
        <PageContainer>
            <Space height="10vh"/>
                <h1>Prüfen</h1>
            <Space Separator="true"/>
            <main>
                <p>
                    Wenn Sie bereits Daten erhoben haben, können Sie hier Ihre Eingaben <b>Prüfen</b>, <b>Korrigieren</b> oder <b>Exportieren</b>. 
                </p>
                <Space height="40px"/>
                <Link href="/App/check/ShowData">
                    <button className="btn btn-primary">
                        Mit der Überprüfung starten
                    </button>
                </Link>
            </main>

            <Space height="10vh"/>

            <Build BarrierTape="enabled"/>
        </PageContainer>
    )
}