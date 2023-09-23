import React, { useState } from "react";

function calculateStandardDeviation(data) {
  const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
  const squaredDifferences = data.map(val => (val - mean) ** 2);
  const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / data.length;
  return Math.sqrt(variance); // Calculate the square root to get the standard deviation
}

export default function SummaryNasa({ data }) {
    // Initialize an empty array to hold summary data for each workplace.
    const summary = [];
  
    // Define the dimension labels
    const dimensionLabels = [
      "mental",
      "physical",
      "temporal",
      "performance",
      "effort",
      "frustration",
    ];
  
    for (const workplace in data) {
      const workplaceData = data[workplace];
      const standardDeviations = {};
  
      // Calculate standard deviation for each dimension
      for (const dimension of dimensionLabels) {
        const dimensionData = workplaceData.map(entry => entry[dimension]);
        const standardDeviation = calculateStandardDeviation(dimensionData);
        standardDeviations[dimension] = standardDeviation;
      }
  
      summary.push({
        workplace,
        standardDeviations,
      });
    }
  
    return (
      <>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Workplace</th>
              {dimensionLabels.map((label, index) => (
                <th key={index}>s {label.charAt(0).toUpperCase() + label.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {summary.map((workplaceSummary, index) => (
              <tr key={index}>
                <td>{workplaceSummary.workplace}</td>
                {dimensionLabels.map((dimension, index) => (
                  <td key={`${workplaceSummary.workplace}-${dimension}`}>
                    {workplaceSummary.standardDeviations[dimension].toFixed(2) || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
