import React, { createContext, useState, useContext, useEffect } from "react";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    // if (typeof window !== "undefined" && window.localStorage) {
      setCompanyName(localStorage.getItem("companyName"));
    // }
  }, []);

  return (
    <CompanyContext.Provider value={{ companyName: companyName, setCompanyName: setCompanyName }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  return useContext(CompanyContext);
}
