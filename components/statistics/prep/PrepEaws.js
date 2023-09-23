import React, { useEffect, useState } from "react";
import useEaws from "@components/dbOps/getEaws";

export default function PrepBorrg() {
  const eawsValues = useEaws();
  const [transformedArray, setTransformedArray] = useState([]);

  useEffect(() => {
    if (eawsValues) {
      const groupedByWorkplace = eawsValues.reduce((result, entry) => {
        const workplace = entry.workplace;
        if (!result[workplace]) {
          result[workplace] = [];
        }
        result[workplace].push(parseInt(entry.value)); // Convert value to integer
        return result;
      }, {});

      const transformedArray = Object.keys(groupedByWorkplace).map((workplace) => ({
        workplace,
        values: groupedByWorkplace[workplace],
      }));


      setTransformedArray(transformedArray);
    }
  }, [eawsValues]);

  return transformedArray;
}
