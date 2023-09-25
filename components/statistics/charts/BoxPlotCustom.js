import React from "react";
import ReactApexChart from "react-apexcharts";

function createBoxPlotData(data) {
  // Create an object to store the grouped and accumulated data
  const groupedData = {};

  // Iterate through the data and group/accumulate it
  data.forEach((item) => {
    const key = `${item.workplace} and ${item.valueName}`;
    if (!groupedData[key]) {
      // Initialize the group if it doesn't exist
      groupedData[key] = {
        x: key, // Combination of workplace and valueName
        y: [], // Array to accumulate and sort values
      };
    }
    // Parse and add the value to the accumulation array
    const parsedValue = parseFloat(item.value);
    if (!isNaN(parsedValue)) {
      groupedData[key].y.push(parsedValue);
    }
  });

  // Calculate statistics for each box plot data point
  for (const key in groupedData) {
    const values = groupedData[key].y;
    values.sort((a, b) => a - b);

    // Calculate statistics: min, q1, median, q3, and max
    const min = Math.min(...values);
    const q1 = values[Math.floor(values.length * 0.25)];
    const median = values[Math.floor(values.length * 0.5)];
    const q3 = values[Math.floor(values.length * 0.75)];
    const max = Math.max(...values);

    // Store these statistics in the y-values array
    groupedData[key].y = [min, q1, median, q3, max];
  }

  // Create the final box plot data series
  const boxPlotData = {
    type: "boxPlot",
    data: Object.values(groupedData),
  };

  return [boxPlotData];
}

export default function BoxPlotChart({ data }) {
  // Create an array of series for the box plot chart
  const series = createBoxPlotData(data);

  // Configure ApexCharts options
  const options = {
    chart: {
      type: "boxPlot",
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: false,
        zoomedArea: {
          fill: {
            color: "#90CAF9",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
            opacity: 0.4,
            width: 1,
          },
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        distributed: true,
      },
      markers: {
        size: 1000,
      },
    },
    title: {
      text: "Custom Data Boxplot",
      align: "center",
      style:{
        fontSize: "30px",
      },
    },
    xaxis: {
      type: "category",
    },
  };

  return (
    <div>
      {console.log(series)}
      <ReactApexChart options={options} series={series} type="boxPlot" height={500} />
    </div>
  );
}
