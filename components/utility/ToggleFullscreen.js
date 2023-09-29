import React, { useEffect } from "react";

export default function ToggleFullscreen({ children, cta, alwaysFull, alwaysMin }) {
  const isFullscreen = () => {
    return document.fullscreenElement || document.webkitFullscreenElement;
  };

  const setFullscreen = () => {
    // Check if requesting fullscreen is allowed by the browser
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen().catch((error) => {
        console.error("Fullscreen request failed:", error);
      });
    }
  };

  const toggleFullscreen = () => {
    const fullscreenEnabled = JSON.parse(localStorage.getItem("fullscreen"));

    // Only toggle if the `toggle` prop is true
    if (isFullscreen() && !fullscreenEnabled) {
      // Exit fullscreen if currently in fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else if (!isFullscreen() && fullscreenEnabled) {
      // Set fullscreen if not in fullscreen mode
      console.log("Should Fullscreen...");
      setFullscreen();
    }
  };

  useEffect(() => {
    // Attach the click event listener to the window object
    window.addEventListener("click", toggleFullscreen);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", toggleFullscreen);
    };
  }, []);

  return <>{children}</>;
}
