export default function(props){
    return(
    <div style={{display:"flex", flex:"1" , flexDirection:"column"}}>
        <label for="input" style={{alignContent:"center", textAlign:"center", padding:"0 0"}}>
            {props.label}
        </label>
        <input type="radio" name="input" value={props.value} key={props.key}
            style={{width: "100%", height: 60, alignContent:"center", textAlign: "center", justifyContent:"center"}}
        />
    </div>);
}