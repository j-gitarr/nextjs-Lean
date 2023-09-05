import React from "react";


export default function CenterChildren({children}){
    return(
        <div
            style={{display: "flex",
                    alignItems: "center", 
                    justifyContent: "center", /* Center vertically */
                    }}>
            {children}
        </div>
    );
}