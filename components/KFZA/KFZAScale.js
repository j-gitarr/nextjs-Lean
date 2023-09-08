import React,{useState} from "react"
import style from "@styles/KFZA.module.css"
import Radio from "@components/Radio"

export default function scale(props) {
    
    return(
        <form className={style.kfzaScale}>
            <Radio id={props.index+"l1"} label={props.label1} value="0" className={style.customLabel} selectedValue={props.selectedValue} onChange={props.onChange} />
            <Radio id={props.index+"l2"} label={props.label2} value="1" className={style.customLabel} selectedValue={props.selectedValue} onChange={props.onChange} />
            <Radio id={props.index+"l3"} label={props.label3} value="2" className={style.customLabel} selectedValue={props.selectedValue} onChange={props.onChange} />
            <Radio id={props.index+"l4"} label={props.label4} value="3" className={style.customLabel} selectedValue={props.selectedValue} onChange={props.onChange} />
            <Radio id={props.index+"l5"} label={props.label5} value="4" className={style.customLabel} selectedValue={props.selectedValue} onChange={props.onChange} />
        </form>
    )
}
