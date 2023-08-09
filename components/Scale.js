import style from "../styles/Scale.module.css"
import PropTypes from "prop-types"




export default function(props){
    return(
        <>
            <input  type="range" list="markers" className={style.input} step={props.step}/>

            <datalist id="markers" className={style.datalist}>
                <option value="0" label={!props.lower ? "gering" : `${props.lower}`}/>
                <option value="5"/>
                <option value="10"/>
                <option value="15"/>
                <option value="20"/>
                <option value="25"/>
                <option value="30"/>
                <option value="35"/>
                <option value="40"/>
                <option value="45"/>
                <option value="50"/>
                <option value="55"/>
                <option value="60"/>
                <option value="65"/>
                <option value="70"/>
                <option value="75"/>
                <option value="80"/>
                <option value="85"/>
                <option value="90"/>
                <option value="95"/>
                <option value="100" label={!props.upper ? "Hoch" : `${props.upper}`}/>
            </datalist>


        </>
    );
}