import React, {useState} from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import FormCheck from "@components/FormCheck";
import style from "@styles/Borg.module.css"
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";


export default function Borg(){
    const [selectedValue, setSelectedValue] = useState(); // State to store the selected value
    const [name, setName] = useState(""); // State to store the name

    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      // Check if a value has been selected
      if (selectedValue === null || selectedValue === "" || selectedValue === undefined) {
        toast.warn("Bitte wählen Sie einen Wert aus");
        return;
      }
      if (!name) {
        toast.warn("Bitte geben Sie Ihre ID an.")
        window.location.href="#top";
        return;
      }
  
      try {
        // Send the selected value to your MongoDB database via your API endpoint
        const response = await fetch("/api/submitBorgValue", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value: selectedValue, name:name, companyName:localStorage.getItem("companyName")}),
        });
  
        if (response.ok) {
          toast.success("Wert erfolgreich übermittelt");
          // Clear the selected value after submission
          setSelectedValue("");
          setName("");
          window.location.href="#top";
        } else {
          console.error("Failed to submit value.");
        }
      } catch (error) {
        console.error("Error submitting value:", error);
      }
    };
    
    return(
        <PageContainer>
        <form onSubmit={handleFormSubmit}>   

        <a id="top"></a>
        <Space height="10vh"/>
                <h1>BORG</h1>
            <Space height="10vh"/>

            <div className="backgroundJean">
                    <Space height="20px"/>
                    <p className="center tcw">TODO INTRODUCTION</p>
                    <Space height="20px"/>
                </div>
            <ShortTextInput 
                    value={name} 
                    onChange={(event)=>setName(event.target.value)}
                    placeholder="Geben Sie hier bitte ihre identifikationsnummer ein..."
                    height="5px"
                    maxWidth="750px"        
            />
            
            <Space height="10vh"/>

            <div className={` ${style.gradientDiv}`} style={{margin:"auto", maxWidth:"1000px"}}>
                <FormCheck id="b6" value="6" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    06 überhaupt keine Anstrengung</FormCheck>
                <FormCheck id="b7" value="7" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    07</FormCheck>
                <FormCheck id="b8" value="8" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    08 extrem Locker</FormCheck>
                <FormCheck id="b9" value="9" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    09</FormCheck>
                <FormCheck id="b10" value="10" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    10 sehr Locker </FormCheck>
                <FormCheck id="b11" value="11" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    11</FormCheck>
                <FormCheck id="b12" value="12" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    12</FormCheck>
                <FormCheck id="b13" value="13" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    13 ein wenig anstrengend</FormCheck>
                <FormCheck id="b14" value="14" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    14</FormCheck>
                <FormCheck id="b15" value="15" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    15 anstrengend</FormCheck>
                <FormCheck id="b16" value="16" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    16</FormCheck>
                <FormCheck id="b17" value="17" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    17 sehr anstrengend</FormCheck>
                <FormCheck id="b18" value="18" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    18</FormCheck>
                <FormCheck id="b19" value="19" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    19 extrem anstrengend</FormCheck>
                <FormCheck id="b20" value="20" onChange={(value) => setSelectedValue(value)} selectedValue={selectedValue}>
                    20 maximale Anstrengung</FormCheck>
                </div>
            

                <Space height="10vh"/>
                
                <Space height="10vh"/>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button 
                        type="submit"
                        style={{margin: "0 auto", maxWidth: "800px", fontSize: "36px"}}
                        className="btn btn-primary">Übermitteln
                    </button>
                </div>
            </form>
        <Space height="30vh"/>           
        </PageContainer>
    );
}