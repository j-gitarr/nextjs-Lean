import React, { useState, useEffect } from "react";
import DataField from "./DataField";
import ConvertTime from "../ConvertTime";

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
    <div className="centeredMax1000">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Personen ID</th>
                        <th scope="col">Wert</th>
                        <th scope="col">Aufgezeichnet am</th>
                    </tr>
                </thead>
                <tbody>
                    {borgData?(
                        borgData.map((item, index)=> (
                            <DataField 
                                key={index} 
                                index={index+1} 
                                value={item.value}
                                date={ConvertTime(item.timestamp)} 
                                id={item._id}
                                persID={item.name}
                                // onDelete={handleDelete}
                                // onEdit={handleEdit}
                                BORG="true"
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
