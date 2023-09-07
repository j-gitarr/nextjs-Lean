import React from "react";
import { useCompany } from "@components/context/CompanyContext";
import ToggleFullscreen from "@components/utility/ToggleFullscreen";

export default function test(){
    
    const {companyName, setCompanyName} = useCompany();
    
    return(
        <div>
            this is a test!
            current company Name: {companyName}
            <ToggleFullscreen></ToggleFullscreen>
        </div>


    );
}