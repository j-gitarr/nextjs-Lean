import React, { useState } from "react";
import Settings from "@components/Settings"
import { FormGroup } from "@mui/material";
import {Switch} from "@mui/material";

export default function Test() {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  const handleOpen = ()=> {
    setOpen(!open);
  }

  return (
    <div>
      <FormGroup style={{ transform: 'rotate(90deg)', width:"50px",}}>
            <Switch
              checked={checked}
              onChange={handleChange}
            />
      </FormGroup>

      <br/>
      <br/>
      <button onClick={handleOpen} >
        Einstellungen
        <Settings open={open} handleClose={handleOpen}/>
      </button>
      
    </div>
  );
}
