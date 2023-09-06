import React from "react";
import Space from "../style/Space";

  
    export default function ShortTextInput(props){ 
    return(
        <div className={props.background || "backgroundJean"}>
                <Space height={props.height || "10vh"}/>
                    <h3 className="text-center text-white centeredMax1000">{props.children}</h3>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.value}
                        onChange={props.onChange}
                        className="form-control from-control-lg centeredMax1000"
                        placeholder={props.placeholder}
                        style={{maxWidth:`${props.maxWidth || "auto"}`}}
                        ref={props.ref}
                    />
                <Space height={props.height || "10vh"}/>
            </div>
    );
}
