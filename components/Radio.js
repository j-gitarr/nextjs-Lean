import Space from "./style/Space";

export default function({id, value, onChange, label, key, selectedValue}){
    const handleChange = (event) => {
        // Pass the selected value to the onChange callback
        onChange(event.target.value);
    };
    
    return(
    <div style={{display:"flex", flex:"1" , flexDirection:"column", cursor:"pointer"}}
    >
        <label 
            htmlFor={id}  
            style={{
                alignContent:"justify", 
                textAlign:"center", 
                padding:"0 0"
            }}
            onClick={handleChange}    
        >
            {label}
            <input 
                type="radio"
                id={id}
                name="input" 
                value={value} 
                onClick={handleChange}
                key={key}
                checked={value === selectedValue}
                style={{
                    width: "100%", 
                    height: 60, 
                    alignContent:"center", 
                    textAlign: "center", 
                    justifyContent:"center",
                }}
            />
        </label>
        <Space height="10px"/>
    </div>);
}