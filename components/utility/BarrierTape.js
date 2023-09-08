// import React, { useEffect, useState } from "react";

// export default function BarrierTape() {
//   const [angle, setAngle] = useState("0deg"); // Initialize angle as "0deg"

//   useEffect(() => {
//     // Calculate the angle when the component mounts and update the state
//     const calcAngle = () => {
//       const angleInRadians = Math.atan(window.innerHeight / window.innerWidth);
//       const angleInDegrees = (angleInRadians * 180) / Math.PI;
//       return angleInDegrees + "deg";
//     };

//     setAngle(calcAngle());
//   }, []); // Run this effect only once when the component mounts

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: "0",
//         left: "0",
//         width: "100%",
//         height: "10%",
//         backgroundColor: "transparent",
//         zIndex: "9999",
//         transformOrigin: "0",
//         transform: `rotate(${angle})`, // Use the calculated angle
//         backgroundColor: "yellow",
//       }}
//     ></div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function BarrierTape() {
  const [angle, setAngle] = useState("0deg"); // Initialize angle as "0deg"

  useEffect(() => {
    // Function to calculate the angle
    const calcAngle = () => {
      const angleInRadians = Math.atan(window.innerHeight / window.innerWidth);
      const angleInDegrees = (angleInRadians * 180) / Math.PI;
      return angleInDegrees + "deg";
    };

    // Calculate and set the initial angle
    setAngle(calcAngle());

    // Event listener for window resize
    const handleResize = () => {
      // Recalculate the angle and update the state
      setAngle(calcAngle());
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "200vw",
        height: "10%",
        backgroundColor: "transparent",
        zIndex: "9999",
        transformOrigin: "100px -50px",
        transform: `rotate(${angle})`, // Use the calculated angle
        backgroundColor: "yellow",
        opacity:"0.5",
        overflow: "hidden", // Hide overflow to prevent text from expanding the div
        whiteSpace: "nowrap", // Prevent text from wrapping
        fontSize:"6vh"
      }}
    >
        <div>
            Under Construction Under Construction Under Construction
            Under Construction Under Construction Under Construction
        </div>
        
    </div>
  );
}
