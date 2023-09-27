import React, { useState, useRef, useEffect } from 'react';
import ConfettiComponent from "./Confetti"

const ConfettiButton = ({children}) => {
  const [confettiActive, setConfettiActive] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 5000); // Disable confetti after 5 seconds (adjust as needed)
  };

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      const top = rect.top + window.scrollY; // Calculate the top position of the button relative to the page
      setConfettiActive(true);
      setTimeout(() => {
        setConfettiActive(false);
      }, 5000); // Disable confetti after 5 seconds (adjust as needed)
    }
  }, []);

  return (
    <div onClick={handleClick}>
      {children}
      <ConfettiComponent active={confettiActive} />
    </div>
  );
};

export default ConfettiButton;

