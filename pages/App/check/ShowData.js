import React, { useState, useEffect } from "react";
import PageContainer from "@components/navigation/check/PageContainerCheck";
import Space from "@components/style/Space";
import BorgData from "@components/utility/check/BorgData"
import NasaTLXData from "@components/utility/check/NasaTLXData"

export default function ShowData() {
  const [eawsData, setEawsData] = useState([]); // State to hold the fetched data

  useEffect(() => {
    // Fetch data when the component mounts

    const companyName = localStorage.getItem("companyName");
    console.log("companyName is:" + companyName);
    
    //TODO Programm if there is no Firm Associated...
    if(companyName === null){
        console.error("no Company Associated");
        return;
    }


    async function fetchData() {
      try {
        const response = await fetch("/api/fetchEAWS?companyName=" + companyName);
        if (response.ok) {
            console.log("awaiting response")
            const data = await response.json();
            setEawsData(data.data); // Assuming your API returns data in the "data" field
        } else {
            console.error("Failed to fetch data");
        }
      } catch (error) {
            console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <PageContainer>
        <Space height="10vh" />
        <h1>Überprüfen Sie Ihre Daten</h1>
        <Space Separator="true" />
        <h2>EAWS</h2>
        {eawsData ? (
            <ul>
            {eawsData.map((item) => (
                <li key={item._id}>Score: {item.value}</li>
            ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        <h2>BORG</h2>
        <BorgData/>
        
        <h2>NASA-TLX</h2>
        <NasaTLXData/>

        <h2>KFZA</h2>
    </PageContainer>
  );
}
