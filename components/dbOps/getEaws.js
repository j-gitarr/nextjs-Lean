import { useEffect, useState } from "react";

export default function getEaws() {
  const [eawsData, setEawsData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const companyName = localStorage.getItem("companyName");


    // TODO Program if there is no Firm Associated...
    if (companyName === null) {
      console.error("no Company Associated");
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch("/api/fetchEAWS?companyName=" + companyName);
        if (response.ok) {
          console.log("awaiting response");
          const data = await response.json();
          setEawsData(data.data); // Set the fetched data in state
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return eawsData; // Return the fetched EAWS data
}
