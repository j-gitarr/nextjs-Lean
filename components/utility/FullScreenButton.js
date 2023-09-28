import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

const FullscreenIconStyle = {
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "9999",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "0 0 10px 10px",
    cursor: "pointer",
}


const FullscreenIcon = () => {
  return (
    <div className={FullscreenIconStyle}>
      <FontAwesomeIcon icon={faExpand} />
    </div>
  );
};

export default FullscreenIcon;
