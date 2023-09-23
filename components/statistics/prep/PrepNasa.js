import React, { useEffect, useState } from "react";
import useNasa from "@components/dbOps/getNasa";

export default function PrepNasa() {
  const nasaValues = useNasa();
  const [transformedData, setTransformedData] = useState({});

  useEffect(() => {
    if (nasaValues) {
      // Group the data by workplace
      const groupedByWorkplace = nasaValues.reduce((result, entry) => {
        const workplace = entry.workplace;
        if (!result[workplace]) {
          result[workplace] = [];
        }
        result[workplace].push({
          mental: entry.mental,
          physical: entry.physical,
          temporal: entry.temporal,
          performance: entry.performance,
          effort: entry.effort,
          frustration: entry.frustration,
          timestamp: entry.timestamp,
        });
        return result;
      }, {});
      setTransformedData(groupedByWorkplace);
    }
  }, [nasaValues]);

  return transformedData;
}
