import React from "react";
import { useCompany } from "@components/context/CompanyContext";

export default function test(){
    
    const {companyName, setCompanyName} = useCompany();
    
    return(
        <div>
            this is a test!
            current company Name: {companyName}
        </div>
    );
}