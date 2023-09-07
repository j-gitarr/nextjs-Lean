import React, { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { useCompany } from "@components/context/CompanyContext";
import { toast } from "react-toastify";
import GlobalToast from "@components/GlobalToast";
import Space from "@components/style/Space";
import { redirectTo } from "./redirectTo";
import Link from "next/link";

export default function Profile(props){
    
    // State, um den eingegebenen Firmennamen zu speichern
  const {companyName, setCompanyName} = useCompany();
  const [value, setValue] = useState("")
  const [weiter, setWeiter] = useState( !(companyName === ""));

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


    if(value === ""){
      toast.warn("Bitte geben Sie Ihre ID ein. Das Feld kann nicht leer sein.")
      return;
    }
    setCompanyName(value);
    toast.success("ID erfolgreich übernommen")

    setWeiter(true);

    console.log("Firmennamen geänder auf:", companyName)
  };
  

  // Function to handle the button click and perform the redirection
  const handleStartDataCollection = () => {
    redirectTo("/questionaires/EAWS", useRouter());
  };


  return(
      <main>
          {props.children}
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

          <Space height="5vh"/>

          <div style={{display:`${weiter? "" : "none"}`}}>
            <p>Ihre aktuell gewählte ID lautet: <b>{companyName}</b></p>

            <Space height="10vh"/>

            <Link href="/questionaires/EAWS">
              <button className="btn btn-primary btn-lg">
                Datensammlung beginnen
              </button>
            </Link>

          </div>
      <GlobalToast/>
      </main>
  );
}