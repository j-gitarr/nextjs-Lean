import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

export default function ToggleFullscreen({ children, cta }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check if the document is in fullscreen mode
    const fullscreenChangeHandler = () => {
      setIsFullscreen(
        !!(document.fullscreenElement || document.webkitFullscreenElement)
      );
    };

    // Add a listener for fullscreen change events
    document.addEventListener("fullscreenchange", fullscreenChangeHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      fullscreenChangeHandler
    );

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
      document.removeEventListener(
        "webkitfullscreenchange",
        fullscreenChangeHandler
      );
    };
  }, []);

  const setFullscreen = () => {
    if (!isFullscreen) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }
  };

  const toggleFullscreen = () => {
    // Only toggle if the `toggle` prop is true
    if (isFullscreen && router.pathname.startsWith("/App")) {
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
    } else if (!router.pathname.startsWith("/App") || !cta) {
      // Set fullscreen if not in fullscreen mode
      setFullscreen();
    }
  };

  return <div onClick={toggleFullscreen}>{children}</div>;
}
