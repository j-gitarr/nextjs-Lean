import React, { useState } from "react";
import style from "@styles/utility/FloatingCTAButton.module.css"

function FloatingCTAButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${style.floatingCTAButton} btn btn-primary ${isOpen ? "open" : ""}`}>
      <button onClick={toggleButton} className={style.ctaButton}>
        {isOpen ? "Close" : "Open CTA"}
      </button>
      {isOpen && (
        <div className="cta-content">
          {/* Add your CTA content here */}
          <p>This is your call to action content.</p>
          <button className="cta-close" onClick={toggleButton}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default FloatingCTAButton;
