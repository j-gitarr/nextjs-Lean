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
  
    // Sort the "y" arrays in ascending order
    for (const key in groupedData) {
      groupedData[key].y.sort((a, b) => a - b);
    }
  
    // Create the final boxplot data series
    const boxPlotData = {
      type: "boxPlot",
      data: Object.values(groupedData),
    };
  
    return [boxPlotData];
  }
  



export default function BoxPlotChart({ data }) {
  // Create an array of series for the boxplot chart
  const series = createBoxPlotData(data)

  // Configure ApexCharts options
  const options = {
    chart: {
      type: "boxPlot",
      zoom: {
        enabled: true,
        type: 'x',  
        autoScaleYaxis: false,  
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          }
        }
    }
    },
    plotOptions:{
        bar:{
            horizontal: true, 
            barHeight: "50%",
            distributed: true,
        },
        markers:{
            size: 1000,
        }
    },
    title: {
      text: "Box Plot Chart",
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