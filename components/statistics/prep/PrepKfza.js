// import React, { useEffect, useState } from "react";
// import useKfza from "@components/dbOps/getKfza";

// export default function PrepBorrg() {
//   const kfzaValues = useKfza();
//   const [transformedArray, setTransformedArray] = useState([]);

//   useEffect(() => {
//     if (kfzaValues) {
//       const groupedByWorkplace = kfzaValues.reduce((result, entry) => {
//         const workplace = entry.workplace;
//         if (!result[workplace]) {
//           result[workplace] = [];
//         }
//         result[workplace].push(parseInt(entry.value)); // Convert value to integer
//         return result;
//       }, {});

//       const transformedArray = Object.keys(groupedByWorkplace).map((workplace) => ({
//         workplace,
//         values: groupedByWorkplace[workplace],
//       }));

//       console.log(kfzaValues)
//       setTransformedArray(transformedArray);
//     }
//   }, [kfzaValues]);

//   return transformedArray;
// }
