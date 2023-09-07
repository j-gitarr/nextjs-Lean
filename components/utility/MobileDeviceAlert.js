import React, { useEffect } from 'react';

export default function MobileDeviceAlert() {
  useEffect(() => {
    function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
      // This is a mobile device
      alert("Verwenden Sie Ihr Smartphone bitte im Querformat. Das Erleichtert die Bedienung und macht das Layout übersichtlicher.");
    }
  }, []); // Empty dependency array to ensure it runs only once

  return null; // This component doesn't render anything
}
