import React from "react";

export default function Space(props){
    return(
        <div
            style={{
                height:props.height,
                backgroundColor:props.color,
                margin:"0",
                width:props.width}}
        />
    );
}