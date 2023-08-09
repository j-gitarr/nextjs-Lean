export default function FormCheck({children}){
    return(

        // Set padding left and right to 4 --> See Bootstrap Doc
        <>
                <input className="form-check-input" type="radio" name="borgChoice" id="borgChoice"
                    style={{width: 60, height: 60, paddingTop: 50}}
                />
                <label className="form-check-label" for="borgChoice" style={{paddingTop: 20, paddingLeft: 20}}>
                    {children}
                </label>
                <br/>
                <hr/>
        </>
    );
}