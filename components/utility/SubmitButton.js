import React from "react";

export default function SubmitButton(props){
    return(
            <button 
                type="submit"
                style={{margin: "0 auto", maxWidth: "800px", fontSize: "36px"}}
                className="btn btn-dark"
                onClick={props.onSubmit}
            >
                {props.children}
            </button>
    )
}