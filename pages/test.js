import getKfza from "@components/dbOps/getKfza";

import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const companyName = localStorage.getItem("companyName");

    if (companyName === null) {
      console.error("no Company Associated");
      return;
    }

    async function fetchData() {
      try {
        const response = await fetch(
          "/api/fetchKFZA?companyName=" + companyName
        );
        if (response.ok) {
          console.log("awaiting response");
          const data = await response.json();
          setData(data.data); // Set the fetched data in state
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts



  const transformData = ()=>{
    data.map()
  }





  return (
    <div>
      <p>test</p>
    </div>
  );
}
