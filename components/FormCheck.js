import styles from "@styles/FormCheck.module.css"
import React from "react";

export default function FormCheck({children, id, value, onChange, selectedValue}){
    
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
    }
    
    return(
        <label
            className="form-check-label"
            htmlFor={id}
            style={{
                display: "flex", // Make the container a flex container
                alignItems: "center", // Vertically center the input and label
                cursor: "pointer", // Change cursor to pointer for clickable effect
                paddingLeft: 20, // Adjust padding as needed
                paddingRight: 20, // Adjust padding as needed
                paddingBottom: 10,
                paddingTop: 10,
                width: "100%"
        }}>
            <input
                className=""
                type="radio"
                name="borgChoice"
                id={id}
                value={value}
                checked={selectedValue === value}
                onChange={handleInputChange}
                style={{ width: "5vw", height: "5vw", paddingTop: 50 }}
            />
            <span style={{ flex: 1, paddingLeft: 20 }}>{children}</span>
        </label>
    );

}

