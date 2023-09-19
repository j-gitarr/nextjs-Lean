import React, {useState} from "react";
import PageContainer from "@components/navigation/insert/PageContainerInsert";
import Space from "@components/style/Space";
import ShortTextInput from "@components/utility/ShortTextInput";
import { toast } from "react-toastify";




export default function Borg(){
    const [selectedValue, setSelectedValue] = useState(); // State to store the selected value
    const [valueName, setValueName] = useState("");
    const [workplace, setWorkplace] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        if(!workplace){
            toast.warn("Bitte wählen Sie eine Arbeitsstaion");
            window.location.href="#top";
            return;
        }
        if (!valueName) {
            toast.warn("Bitte geben Sie einen Namen für den Wert ein.")
            window.location.href="#top";
            return;
        }
        if (selectedValue === null || selectedValue === "" || selectedValue === undefined) {
            toast.warn("Bitte wählen Sie einen Wert aus");
            return;
        }
  
      try {
        // Send the selected value to your MongoDB database via your API endpoint
        const response = await fetch("/api/submitCustomValue", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value: selectedValue, valueName: valueName, workplace:workplace, companyName:localStorage.getItem("companyName")}),
        });
  
        if (response.ok) {
          toast.success("Wert erfolgreich übermittelt");
          // Clear the selected value after submission
          setSelectedValue("");
          setValueName("");
          setWorkplace("");
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
                <h1>Eigene Prozessdaten</h1>
                <Space height="10vh"/>

                <div className="backgroundJean">
                    <Space height="20px"/>
                    <p className="center tcw">
                        TODO
                    </p>
                    <Space height="20px"/>
                </div>
                
                <Space height="10vh"/>
                
                <div className="centeredContent"><p style={{margin:"0"}}>Geben Sie hier bitte Ihre derzeitige <b>Arbeitsstation</b> ein</p></div>
                <ShortTextInput
                    value={workplace}
                    onChange={(event)=>setWorkplace(event.target.value)}
                    placeholder=""
                    height="5px"
                    maxWidth="750px"
                    background={"white"}
                />

                <Space height="10vh"/>

                <div className="centeredContent"><p style={{margin:"0"}}>Geben Sie hier bitte den <b>Namen der Kennzahl</b> ein</p></div>
                <ShortTextInput
                    value={valueName}
                    onChange={(event)=>setValueName(event.target.value)}
                    placeholder=""
                    height="5px"
                    maxWidth="750px"
                    background={"white"}
                />
                
                <Space height="10vh"/>
                
                <div className="centeredContent"><p style={{margin:"0"}}>Geben Sie hier bitte den <b>Wert</b> der Kennzahl ein</p></div>
                <ShortTextInput
                    value={selectedValue}
                    onChange={(event)=>setSelectedValue(event.target.value)}
                    placeholder=""
                    height="5px"
                    maxWidth="750px"
                    background={"white"}
                />

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