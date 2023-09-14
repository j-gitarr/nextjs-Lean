// import React, { useState, useEffect } from "react";
// import PageContainer from "@components/navigation/check/PageContainerCheck";
// import Space from "@components/style/Space";
// import BorgData from "@components/utility/check/BorgData"
// import NasaTLXData from "@components/utility/check/NasaTLXData"
// import KFZAData from "@components/utility/check/KFZAData"
// import EawsData from "@components/utility/check/EawsData"
// import CSVDownload from "@components/utility/CSVDownload";



// export default function ShowData() {
//   const[fullData, setFullData] = useState(null)

//   useEffect(() => {
//     // Fetch data from your API
//     async function fetchData() {
//       try {
//         const response = await fetch("/api/fetchAllAtOnce");
//         if (response.ok) {
//           const data = await response.json();
//           setFullData(data.data); // Assuming the data is in the 'data' field of the response
//         } else {
//           console.error("Failed to fetch data");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <PageContainer>
//       <Space height="10vh" />
//       <h1>Überprüfen Sie Ihre Daten</h1>
//       <Space Separator="true" />
//       <h2>EAWS</h2>
//       <EawsData/>

//       <Space height="10vh" />

//       <h2>BORG</h2>
//       <BorgData/>
      
//       <Space height="10vh" />

//       <h2>NASA-TLX</h2>
//       <NasaTLXData/>

//       <Space height="10vh" />

//       <h2>KFZA</h2>
//       <KFZAData/>

//       <CSVDownload data={fullData}/>

//     </PageContainer>
//   );
// }

import React, { useState, useEffect } from "react";
import PageContainer from "@components/navigation/check/PageContainerCheck";
import Space from "@components/style/Space";
import BorgData from "@components/utility/check/BorgData"
import NasaTLXData from "@components/utility/check/NasaTLXData"
import KFZAData from "@components/utility/check/KFZAData"
import EawsData from "@components/utility/check/EawsData"
import CSVDownload from "@components/utility/CSVDownload";

export default function ShowData() {
  const [fullData, setFullData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch data from your API
    async function fetchData() {
      try {
        const response = await fetch("/api/fetchAllAtOnce");
        if (response.ok) {
          const data = await response.json();
          setFullData(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false when done
      }
    }

    fetchData();
  }, []);

  return (
    <PageContainer>
      <Space height="10vh" />
      <h1>Überprüfen Sie Ihre Daten</h1>
      <Space Separator="true" />
      <Space height="10vh" />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <h2>EAWS</h2>
          <EawsData />
          <main><CSVDownload type="eaws">Download EAWS</CSVDownload></main>
          <Space height="30vh" />

          <h2>BORG</h2>
          <BorgData />
          <main>
            <CSVDownload type="borg">Download BORG</CSVDownload>
          </main>
          <Space height="30vh" />

          <h2>NASA-TLX</h2>
          <NasaTLXData />
          <main>
            <CSVDownload type="nasa">Download NASA-TLX</CSVDownload>
          </main>
          <Space height="30vh" />

          <h2>KFZA</h2>
          <KFZAData />
          <main>
            <CSVDownload type="kfza">Download KFZA</CSVDownload>
          </main>
          <Space height="30vh" />
        </>
      )}
    </PageContainer>
  );
}
