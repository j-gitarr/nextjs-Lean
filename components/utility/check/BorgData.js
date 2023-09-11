import React, { useState, useEffect } from "react";

export default function ShowData() {
  const [borgData, setBorgData] = useState([]); // State to hold the fetched data

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
        const response = await fetch("/api/fetchBorg?companyName=" + companyName);
        if (response.ok) {
            console.log("awaiting response")
            const data = await response.json();
            setBorgData(data.data); // Assuming your API returns data in the "data" field
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
    <div>
        {borgData ? (
            <ul>
              {borgData.map((item) => (
                <li key={item._id}>Score: {item.value}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
    </div>
  );
}
