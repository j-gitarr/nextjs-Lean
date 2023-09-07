import React from "react";
import { useCompany } from "@components/context/CompanyContext";
import MobileDeviceAlert from "@components/utility/MobileDeviceAlert";

export default function Test() {
  const { companyName, setCompanyName } = useCompany();

  return (
    <div>
      This is a test!
      <br />
      Current company Name: {companyName}
      <br />
      <MobileDeviceAlert/>
    </div>
  );
}
