import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCompany } from "@components/context/CompanyContext";
import { toast } from "react-toastify";
import GlobalToast from "@components/GlobalToast";
import Space from "@components/style/Space";
import { redirectTo } from "./redirectTo";
import Link from "next/link";
import SideBySide from "@components/style/SideBySide";

export default function Profile(props) {
  // State, um den eingegebenen Firmennamen zu speichern
  const { companyName, setCompanyName } = useCompany();
  const [value, setValue] = useState("");
  const [weiter, setWeiter] = useState(!(companyName === ""));

  useEffect(() => {
    const savedCompanyName = localStorage.getItem("companyName");
    if (savedCompanyName) {
      setCompanyName(savedCompanyName);
    }
  }, [setCompanyName]);

  useEffect(() => {
    localStorage.setItem("companyName", companyName);
  }, [companyName]);

  // Funktion zum Aktualisieren des Firmennamens, wenn sich der Nutzer ändert
  const handleCompanyNameChange = (e) => {
    e.preventDefault();

    if (value === "") {
      toast.warn("Bitte geben Sie Ihre ID ein. Das Feld kann nicht leer sein.");
      return;
    }
    setCompanyName(value);
    toast.success("ID erfolgreich übernommen");

    setWeiter(true);

    console.log("Firmennamen geänder auf:", companyName);
  };

  // Function to handle the button click and perform the redirection
  const handleStartDataCollection = () => {
    redirectTo("/questionaires/EAWS", useRouter());
  };

  return (
    <main>
      {props.children}
      <form onSubmit={handleCompanyNameChange}>
        <table>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Identifizierungscode"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="input-group-text input-group"
              />
            </td>
            <td>
              <button
                type="submit"
                className="btn btn-secondary"
                style={{ marginLeft: "30px" }}
              >
                Bestätigen
              </button>
            </td>
          </tr>
        </table>
      </form>

      <div
        style={{ display: `${weiter ? "" : "none"}`, width: "100%" }}
        className="centerContent"
      >
        <Space Separator="true" />
        <div className="d-flex justify-content-center">
          <Link href="/App/insert/questionaires/EAWS">
            <button className="btn btn-primary btn-lg">Erhebung starten</button>
          </Link>
        </div>
      </div>
      <GlobalToast />
    </main>
  );
}
