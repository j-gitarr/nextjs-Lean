import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default ({children}) => (
  <Popup
    trigger={
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="infoIcon"
      />
    }
    position="right center"
    modal
  >
    <div><p><FontAwesomeIcon
        icon={faInfoCircle}
        style={{ color: "#2c558c" }}
      /> {children}</p></div>
  </Popup>
);
