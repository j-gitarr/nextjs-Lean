import React, { useState, useEffect } from "react";
import DataField from "./DataField";
import ConvertTime from "../ConvertTime";

export default function ShowData() {
  const [nasaData, setNasaData] = useState([]); // State to hold the fetched data

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
        const response = await fetch("/api/fetchNASATLX?companyName=" + companyName);
        if (response.ok) {
            console.log("awaiting response")
            const data = await response.json();
            setNasaData(data.data); // Assuming your API returns data in the "data" field
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
    <div className="centeredMax1000">
      <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Personen ID</th>
                  <th scope="col">Aufgezeichnet am</th>
                  <th scope="col">NASA-TLX Werte</th>
              </tr>
          </thead>
          <tbody>
              {nasaData?(
                nasaData.map((item, index)=> (
                      <DataField 
                          key={index} 
                          index={index+1} 
                          mental={item.mental}
                          physical={item.physical}
                          temporal={item.temporal}
                          performance={item.performance}
                          effort={item.effort}
                          frustration={item.frustration}
                          date={ConvertTime(item.timestamp)} 
                          id={item._id}
                          persID={item.name}
                          // onDelete={handleDelete}
                          // onEdit={handleEdit}
                          NASA="true"
                      />
                  ))
                  ):(
                  <tr className="table-warning">
                      <td colSpan="3">Fügen Sie Einträge hinzu</td>
                  </tr>
                  )   
              }
          </tbody>
      </table>
    </div>
  );
}
