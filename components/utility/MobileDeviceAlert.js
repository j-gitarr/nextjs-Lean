import React, { useEffect } from 'react';

export default function MobileDeviceAlert() {
  useEffect(() => {
    function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
      // This is a mobile device
      alert("Mobile device detected");
    } else {
      // This is not a mobile device (e.g., desktop)
      alert("Not a mobile device");
    }
  }, []); // Empty dependency array to ensure it runs only once

  return null; // This component doesn't render anything
}
