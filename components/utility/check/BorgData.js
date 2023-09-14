import React, { useState, useEffect } from "react";
import DataField from "./DataField";
import ConvertTime from "../ConvertTime";
import isInt from "../IsInt";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ShowData() {
  const [borgData, setBorgData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const displayedPages = 5;

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

  useEffect(() => {
    const temp = Math.ceil(borgData.length / displayedPages);
    temp === 0? setNumPages(1):setNumPages(temp);
  }, [borgData]);

  const nextPage = ()=>{
    currentPage+1 < numPages? setCurrentPage(currentPage+1) : console.log("already at last page")
  }

  const prevPage = ()=>{
    currentPage > 0? setCurrentPage(currentPage-1) : console.log("already at first page")
  }

  const handleDelete = async (id, index) => {    
    if(!confirm("Wollen Sie den Eintrag wirklich entfernen?")){
        return;
    }
    try {
        const response = await fetch("/api/deleteBorg?id=" + id, {
            method: "DELETE",
        });

        if (response.ok) {
            // If the delete operation is successful, update the state to reflect the change
            const updatedData = [...borgData];
            updatedData.splice(index - 1, 1); // Remove the deleted entry
            setBorgData(updatedData);
        } else {
            console.error("Failed to delete entry: " + id);
        }
    } catch (error) {
        console.error("Error deleting entry:", error);
    }
};


const handleEdit = async (id, index) => {
    let newValue = prompt("here input");
    if(!isInt(newValue)){
        toast.warn("Bitte geben Sie einen Zahlenwert ein!");
        return;
    }
    try{
        const response = await fetch(`/api/editBorg?id=${id}&newValue=${newValue}`, {
            method: "PUT", 
        });
        if (response.ok) {
            // Update the state with the edited data
            const updatedData = [...borgData];
            updatedData[index - 1].value = parseInt(newValue); // Assuming newValue is a string
      
            // Update the state to reflect the change
            setBorgData(updatedData);
            
        toast.success("Entry edited successfully");
        } else {
            console.error("Failed to edit entry: " + id);
        }
    } catch (error) {
        console.error("Error editing entry:", error);
    }
}



  return (
    <div className="centeredMax1000">
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">PID</th>
                        <th scope="col">Wert</th>
                        <th scope="col">Datum</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {borgData.length !== 0?(
                        borgData.slice(currentPage*displayedPages, currentPage*displayedPages+displayedPages).map((item, index)=> (
                            <DataField 
                                key={index} 
                                index={index+1 +(currentPage*displayedPages)} 
                                value={item.value}
                                date={ConvertTime(item.timestamp)} 
                                id={item._id}
                                persID={item.name}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                                BORG="true"
                            />
                        ))
                        ):(
                        <tr>
                            Keine Einträge vorhanden
                        </tr>
                        )   
                    }
                    <tr>
                        <td colSpan="5" className="text-center">
                        {borgData.length !== 0? (
                            <>
                            <FontAwesomeIcon icon={faArrowLeft} onClick={prevPage} className="spaceRightSM" size="2xl"/>
                            <FontAwesomeIcon icon="fa-solid fa-square-arrow-right" size="2xl" />
                            Seite {currentPage + 1} von {numPages} 
                            <FontAwesomeIcon icon={faArrowRight} onClick={nextPage} className="spaceLeftSM" size="2xl"/>     
                            </>  
                        ):('')}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

  );
}
