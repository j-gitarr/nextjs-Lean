import React from "react";
import style from "@styles/Space.module.css"

export default function Space(props){
    
    const separatorClass = props.Separator? style.separator : "";

    return(
        <div
            style={{
                height:props.height,
                backgroundColor:props.color,
                margin:props.margin,
                width:props.width
            }}
            className={`${props.className} ${separatorClass}`}

        />
    );
}