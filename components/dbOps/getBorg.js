// getBorg.js
import { useEffect, useState } from "react";

export default function useBorg() {
  const [borgData, setBorgData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const companyName = localStorage.getItem("companyName");
    console.log("companyName is: " + companyName);

    // TODO Program if there is no Firm Associated...
    if (companyName === null) {
      console.error("no Company Associated");
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch("/api/fetchBorg?companyName=" + companyName);
        if (response.ok) {
          console.log("awaiting response");
          const data = await response.json();
          setBorgData(data.data); // Set the fetched data in state
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return borgData; // Return the fetched Borg data
}
