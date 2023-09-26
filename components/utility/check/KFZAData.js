import React, { useState, useEffect } from "react";
import DataField from "./DataField";
import ConvertTime from "../ConvertTime";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customConfirm } from "../CustomConfirm";
import { toast } from "react-toastify";

export default function ShowData() {
  const [kfzaData, setKfzaData] = useState([]); // State to hold the fetched data
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const displayedPages = 5;

  useEffect(() => {
    // Fetch data when the component mounts

    const companyName = localStorage.getItem("companyName");

    // TODO: Program if there is no Firm Associated...
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
          setKfzaData(data.data); // Assuming your API returns data in the "data" field
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
    const temp = Math.ceil(kfzaData.length / displayedPages);
    temp === 0 ? setNumPages(1) : setNumPages(temp);
  }, [kfzaData]);

  const nextPage = () => {
    currentPage + 1 < numPages
      ? setCurrentPage(currentPage + 1)
      : console.log("already at the last page");
  };

  const prevPage = () => {
    currentPage > 0
      ? setCurrentPage(currentPage - 1)
      : console.log("already at the first page");
  };

  const handleDelete = async (id, index) => {
    const del = await customConfirm(
      "Wollen Sie den Eintrag wirklich entfernen?"
    );
    if (!del) {
      toast.warn("Vorgang abgebrochen");
      return;
    }
    try {
      const response = await fetch("/api/deleteKfza?id=" + id, {
        method: "DELETE",
      });

      if (response.ok) {
        // If the delete operation is successful, update the state to reflect the change
        const updatedData = [...kfzaData];
        updatedData.splice(index - 1, 1); // Remove the deleted entry
        setKfzaData(updatedData);
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
            <th scope="col">PID</th>
            <th scope="col">KFZA Werte</th>
            <th scope="col">Datum</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {kfzaData.length !== 0 ? (
            kfzaData.map((item, index) => {
              // Initialize an empty array for questionValues
              const questionValues = [];

              // Loop through the keys "question0", "question1", etc., and collect their values
              for (let i = 0; i <= 26; i++) {
                const key = `question${i}`;
                questionValues.push({ index: i, value: item[key] });
              }
              return (
                <DataField
                  key={index}
                  index={index + 1 + currentPage * displayedPages}
                  kfzaValues={questionValues}
                  date={ConvertTime(item.timestamp)}
                  id={item._id}
                  persID={item.name}
                  onDelete={handleDelete}
                  KFZA="true"
                />
              );
            })
          ) : (
            <tr>Keine Einträge vorhanden</tr>
          )}
          <tr>
            <td colSpan="5" className="text-center">
              {kfzaData.length !== 0 ? (
                <>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    onClick={prevPage}
                    className="spaceRightSM"
                    size="2x"
                  />
                  Seite {currentPage + 1} von {numPages}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    onClick={nextPage}
                    className="spaceLeftSM"
                    size="2x"
                  />
                </>
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
