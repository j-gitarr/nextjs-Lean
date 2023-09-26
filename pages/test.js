import React, { useState } from "react";
import CustomValueDropdown from "@components/utility/CustomValueDropdown"


export default function Test(){
  const [valueName, setValueName] = useState("Bitte Kennzahl wählen...")

  return(
    <div>
      der Name der geilsten Kennzahl ist: {valueName}

      <br/>
      <br/>
      <br/>
      <br/>


      <CustomValueDropdown value={valueName} onValueChange={setValueName}/>
    </div>
  )


}