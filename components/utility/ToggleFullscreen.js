import React, { useEffect, useState } from 'react';

const ToggleFullscreen = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Check if the document is in fullscreen mode
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
    };

    // Add a listener for fullscreen change events
    document.addEventListener('fullscreenchange', fullscreenChangeHandler);
    document.addEventListener('webkitfullscreenchange', fullscreenChangeHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
      document.removeEventListener('webkitfullscreenchange', fullscreenChangeHandler);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className={isFullscreen ? 'fullscreen' : ''}>
      {children}
      <button onClick={toggleFullscreen}>Toggle Fullscreen</button>
    </div>
  );
};

export default ToggleFullscreen;
