import React from "react";

export default function Space(props){
    return(
        <div
            style={{
                height:props.height,
                backgroundColor:props.color,
                margin:props.margin,
                width:props.width
            }}
            className={props.className}
        />
    );
}