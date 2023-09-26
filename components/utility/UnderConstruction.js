import React from "react"
import Space from "@components/style/Space"
import BarrierTape from "./BarrierTape"

export default function Build(props){
    
    // Check if props.BarrierTape is truthy before rendering BarrierTape component
    const renderBarrierTape = ()=>{
        if (props.BarrierTape === "enabled" || props.BarrierTape === null) {
            return <BarrierTape />
        } else if (props.BarrierTape === "disabled" || props.BarrierTape === "false") {
            return null;
        }
    }

    const buildBackground = () => {
        if (
          props.Background === "enabled" ||
          props.Background === null ||
          props.Background === "" ||
          props.Background === undefined
        ) {
          return (
            <div
              style={{
                backgroundImage: `url(/images/construction.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Space height="30vh" />
      
              <h1 style={{ color: "white", background: "#5e7783" }}>
                Page currently under construction
              </h1>
      
              <Space height="1000px" />
      
              <p style={{ background: "white" }}>
                picture by: Photo by Aleksandar Pasaric:{" "}
                https://www.pexels.com/photo/photo-of-skyscrapers-surrounded-with-clouds-1437493/
              </p>
            </div>
          );
        } else if (props.Background === "disabled" || props.Background === "false") {
          return null;
        }
      };
      


    return(
        <div>
            {buildBackground()} {/* Corrected invocation */}
            {renderBarrierTape()} {/* Corrected invocation */}
        </div>
    )
}
