import React, { useEffect, useState } from "react";
import useBorg from "@components/dbOps/getBorg";

export default function PrepBorrg() {
  const borgValues = useBorg();
  const [transformedArray, setTransformedArray] = useState([]);

  useEffect(() => {
    if (borgValues) {
      const groupedByWorkplace = borgValues.reduce((result, entry) => {
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
  }, [borgValues]);

  return transformedArray;
}
