import React from "react"
import { useState, useEffect } from "react";
import { useCompany } from "@components/context/CompanyContext";

export default function Profile(){
    
    // State, um den eingegebenen Firmennamen zu speichern
  const {companyName, setCompanyName} = useCompany();
  const [value, setValue] = useState("")

  useEffect(()=>{
    const savedCompanyName = localStorage.getItem("companyName");
    if(savedCompanyName){
        setCompanyName(savedCompanyName)
    }
  }, [setCompanyName])

  useEffect(()=>{
    localStorage.setItem("companyName", companyName);
  }, [companyName]);


  // Funktion zum Aktualisieren des Firmennamens, wenn sich der Nutzer ändert
  const handleCompanyNameChange = (e) => {
    e.preventDefault();
    setCompanyName(value);
    console.log("Firmennamen geänder auf:", companyName)
  };
    
    return(
        <main>
            <p>Bitte geben Sie den eindeutigen Identifizierungscode ihrer Firma ein</p>
            <form onSubmit={handleCompanyNameChange}>
                <input
                    type="text"
                    placeholder="Identifizierungscode"
                    value={value} 
                    onChange={(e)=>setValue(e.target.value)}
                />
                <button type="submit">
                    Bestätigen
                </button>
            </form>

            <h1>{companyName}</h1>
        </main>
    );
}