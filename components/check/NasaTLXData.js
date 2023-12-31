import React, { useState, useEffect } from "react";
import DataField from "./DataField";
import ConvertTime from "../utility/ConvertTime";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { customConfirm } from "../utility/CustomConfirm";


export default function ShowData() {
  const [nasaData, setNasaData] = useState([]); // State to hold the fetched data
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const displayedPages = 5;

  // Fetch data when the component mounts
  useEffect(() => {

    const companyName = localStorage.getItem("companyName");
    
    
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
            setNasaData(data.data);
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
    const temp = Math.ceil(nasaData.length / displayedPages);
        temp === 0? setNumPages(1):setNumPages(temp);
  }, [nasaData]);

  const nextPage = ()=>{
    currentPage+1 < numPages? setCurrentPage(currentPage+1) : console.log("already at last page")
  }

  const prevPage = ()=>{
    currentPage > 0? setCurrentPage(currentPage-1) : console.log("already at first page")
  }

  const handleDelete = async (id, index) => {    
    const del = await customConfirm("Wollen Sie den Eintrag wirklich entfernen?")
    if(!del){
      return;
    }
    try {
        const response = await fetch("/api/deleteNasa?id=" + id, {
            method: "DELETE",
        });

        if (response.ok) {
            // If the delete operation is successful, update the state to reflect the change
            const updatedData = [...nasaData];
            updatedData.splice(index - 1, 1); // Remove the deleted entry
            setNasaData(updatedData);
        } else {
            console.error("Failed to delete entry: " + id);
        }
    } catch (error) {
        console.error("Error deleting entry:", error);
    }
};

  return (
    <div className="centeredMax1000">
      <table className="table ">
          <thead className="table-light">
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">Asrbeitsstation</th>
                  <th scope="col">NASA-TLX Werte</th>
                  <th scope="col">Datum</th>
                  <th scope="col"></th>
              </tr>
          </thead>
          <tbody>
              {nasaData.length !== 0?(
                nasaData.slice(currentPage*displayedPages, currentPage*displayedPages+displayedPages).map((item, index)=> (
                      <DataField 
                          key={index} 
                          index={index+1 +(currentPage*displayedPages)} 
                          mental={item.mental}
                          physical={item.physical}
                          temporal={item.temporal}
                          performance={item.performance}
                          effort={item.effort}
                          frustration={item.frustration}
                          date={ConvertTime(item.timestamp)} 
                          id={item._id}
                          persID={item.name}
                          workplace={item.workplace}
                          onDelete={handleDelete}
                          NASA="true"
                      />
                  ))
                  ):(
                  <tr className="table-warning">
                      Keine Einträge vorhanden
                  </tr>
                  )   
              }
              <tr>
                <td colSpan="5" className="text-center">
                  {nasaData.length !==0 ? (
                    <>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={prevPage} className="spaceRightSM" size="2xl"/>
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
