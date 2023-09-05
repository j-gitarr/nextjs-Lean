import React, { createContext, useState, useContext } from "react";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [companyName, setCompanyName] = useState("");

  return (
    <CompanyContext.Provider value={{ companyName, setCompanyName }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  return useContext(CompanyContext);
}
