import React, { useState, useEffect } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { customPrompt } from "@components/utility/CustomPrompt";
import { customConfirm } from "./CustomConfirm";

export default function WorkstationDropdown({ value, onValueChange }) {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // Add searchValue state

  useEffect(() => {
    async function fetchData() {
      try {
        const storedCompanyName = localStorage.getItem("companyName");

        if (!storedCompanyName) {
          console.error("companyName not found in localStorage");
          return;
        }

        const response = await fetch(
          `/api/fetchWorkplaces?companyName=${storedCompanyName}`
        );
        if (response.ok) {
          const data = await response.json();
          const extractedNames = data.data.map((item) => item.workplace);
          const sortedNames = extractedNames.sort((a, b) => a.localeCompare(b));
          setItems(sortedNames);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const storedCompanyName = localStorage.getItem("companyName");
    if (storedCompanyName) {
      fetchData();
    }
  }, []);

  const handleFormSubmit = async (newValue) => {
    try {
      const response = await fetch("/api/submitWorkplaces", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workplace: newValue,
          companyName: localStorage.getItem("companyName"),
        }),
      });

      if (response.ok) {
        console.log("neue Arbeitsstation definiert");
      } else {
        console.error("Failed to submit value.");
      }
    } catch (error) {
      console.error("Error submitting value:", error);
    }
  };

  const handleDeleteButtonClick = async (itemToDelete) => {
    const conf = await customConfirm(
      "Wollen Sie die Arbeitsstation wirklich entfernen?", "Ja", "Nein"
    );

    if (!conf) {
      console.log("Definition Arbeitsstation abgebrochen");
      return;
    }

    let companyName = localStorage.getItem("companyName");
    try {
      const response = await fetch(
        `/api/deleteWorkplace?workplace=${itemToDelete}&companyName=${companyName}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workplace: itemToDelete,
            companyName: localStorage.getItem("companyName"),
          }),
        }
      );

      if (response.ok) {
        toast.success("Arbeitsstation erfolgreich gelöscht");
        // After successfully deleting, update the dropdown
        const updatedItems = items.filter((item) => item !== itemToDelete);
        setItems(updatedItems);
        // Clear the selected value if it was deleted
        if (value === itemToDelete) {
          onValueChange("Arbeitsstation wählen...");
        }
      } else {
        console.error("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <button className="btn btn-light btn-lg">
        {value}{" "}
        <FontAwesomeIcon
          icon={faCaretDown}
          className="fa-xl"
          style={{ color: "#d0d1d3" }}
        />
      </button>
    </a>
  ));

  const handleDropDownSelect = (eventKey) => {
    if (eventKey !== "add" && eventKey !== "edit") {
      onValueChange(eventKey);
    }
  };

  const handleAddButtonClick = async () => {
    const newItem = await customPrompt(
      "Bitte geben Sie hier den Namen Ihrer Arbeitsstation ein:", searchValue
    );

    if (newItem !== null) {
      await handleFormSubmit(newItem);
      onValueChange(newItem);
      setItems([...items, newItem]);
    }
  };

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Suche..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          {items.map((item, index) => {
            const itemText = String(item);
            if (
              !searchValue ||
              itemText.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return (
                <div key={index}>
                  <Dropdown.Item eventKey={item}>
                    <table style={{ width: "100%", border: "none" }}>
                      <tbody>
                        <tr>
                          <td style={{ border: "none" }}>{item}</td>
                          <td
                            style={{
                              border: "none",
                              textAlign: "right",
                              marginLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => handleDeleteButtonClick(item)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Dropdown.Item>
                </div>
              );
            }
            return null;
          })}
          <Dropdown.Item
            key="add"
            eventKey="add"
            onClick={handleAddButtonClick}
          >
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">hinzufügen</button>
            </div>
          </Dropdown.Item>
        </div>
      );
    }
  );


  const handleToggle = () =>{
    setSearchValue("");
  }

  return (
    <div>
      <Dropdown onSelect={handleDropDownSelect} onToggle={handleToggle}> 
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {value}
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="scrollableDropdownMenu"
          as={CustomMenu}
        ></Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
