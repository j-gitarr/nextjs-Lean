import React, { useState } from "react";
import style from "../styles/Scale.module.css";
import { Slider } from "@mui/material";

export default function Scale(props) {
  return (
    <>
      {/* <input
        id={props.id}
        type="range"
        list="markers"
        className={style.customRange}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      /> */}
      
      <br/>
      <Slider
        defaultValue={props.value}
        valueLabelDisplay="auto"
        step={props.step}
        marks
        min={0}
        max={100}
        style={{ height: "50px", color: "#d0d1d3", padding:"0" }}
        classes={{
          thumb: style["customThumb"], // Apply the custom styles to the thumb
          mark: style["customMark"],
        }}
        marks={[{ value: 50 }]}
        onChange={props.onChange}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{!props.lower ? "gering" : `${props.lower}`}</div>
        <div>{!props.upper ? "Hoch" : `${props.upper}`}</div>
      </div>
    </>
  );
}
