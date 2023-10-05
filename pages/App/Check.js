// import React from "react";
// import PageContainer from "@components/navigation/app/PageContainerApp"
// import Space from "@components/style/Space";
// import Link from "next/link";

// export default function Check(){
//     return(
//         <PageContainer>
//             <Space height="10vh"/>
//                 <h1>Prüfen</h1>
//             <Space Separator="true"/>
//             <main>
//                 <p>
//                     Wenn Sie bereits Daten erhoben haben, können Sie hier Ihre Eingaben <b>Prüfen</b>, <b>Korrigieren</b> oder <b>Exportieren</b>.
//                 </p>
//                 <Space height="40px"/>
//                 <Link href="/App/check/ShowData">
//                     <button className="btn btn-primary">
//                         Mit der Überprüfung starten
//                     </button>
//                 </Link>
//             </main>

//             <Space height="20vh"/>
//         </PageContainer>
//     )
// }

import React, { useState, useEffect } from "react";
import PageContainer from "@components/navigation/check/PageContainerCheck";
import Space from "@components/style/Space";
import EawsTable from "@components/check/tables/EawsTable";
import NasaTable from "@components/check/tables/NasaTable";
import BorgTable from "@components/check/tables/BorgTable";
import KfzaTable from "@components/check/tables/KfzaTable";
import CustomTable from "@components/check/tables/CustomDataTable";
import Link from "next/link";

export default function ShowData() {
  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Überprüfen Sie Ihre Daten</h1>
      <div className="centeredMax1000">
        <p>
          Wenn Sie bereits Daten erhoben haben, können Sie hier Ihre Eingaben{" "}
          <b>Prüfen</b>, <b>Korrigieren</b> oder <b>Exportieren</b>.
        </p>
      </div>
      <div
        className="centeredMax1000"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link className="inPageLink" href="#eaws">
          EAWS
        </Link>
        <Link className="inPageLink" href="#borg">
          BORG
        </Link>
        <Link className="inPageLink" href="#nasa">
          NASA-TLX
        </Link>
        <Link className="inPageLink" href="#kfza">
          KFZA
        </Link>
        <Link className="inPageLink" href="#custom">
          Eigene Prozessdaten
        </Link>
      </div>

      <Space height="20px" />
      <Space height="20px" className="backgroundJean" />

      <Space height="10vh" />

      <a id="eaws"></a>
      <h2>EAWS</h2>
      <div className="centeredMax1000">
        <EawsTable />
      </div>
      <Space height="30vh" />

      <a id="borg"></a>
      <h2>BORG</h2>
      <div className="centeredMax1000">
        <BorgTable />
      </div>

      <Space height="30vh" />

      <a id="nasa"></a>
      <h2>NASA-TLX</h2>
      <div className="centeredMax1000">
        <NasaTable />
      </div>

      <Space height="30vh" />

      <a id="kfza"></a>
      <h2>KFZA</h2>
      <div className="centeredMax1000">
        <KfzaTable />
      </div>

      <Space height="30vh" />

      <a id="custom"></a>
      <h2>Eigene Prozessdaten</h2>
      <div className="centeredMax1000">
        <CustomTable />
      </div>
      <Space height="30vh" />
    </PageContainer>
  );
}
