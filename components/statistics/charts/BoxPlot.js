import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const BoxPlotChart = ({ transformedArray, chartHeightP }) => {
  const [dataPoints, setDataPoints] = useState([]);
  const [chartHeight, setChartHeight] = useState(0);

  useEffect(() => {
    // Calculate quartiles and other statistics only on the client-side
    if (typeof window !== "undefined") {
      // Calculate quartiles and other statistics for each workplace data
      const processedData = transformedArray.map((workplaceData) => {
        const values = workplaceData.values;
        const sortedValues = values.sort((a, b) => a - b);
        const q1 = sortedValues[Math.floor(sortedValues.length * 0.25)];
        const median = sortedValues[Math.floor(sortedValues.length * 0.5)];
        const q3 = sortedValues[Math.floor(sortedValues.length * 0.75)];
        const min = Math.min(...sortedValues);
        const max = Math.max(...sortedValues);

        return {
          ...workplaceData,
          values: {
            min,
            q1,
            median,
            q3,
            max,
          },
        };
      });

      // Set the processed data to the state
      setDataPoints(processedData);
    }

    const viewportHeight = window.innerHeight;
    const chartHeightPercentage = chartHeightP; // You can adjust this value as needed
    const calculatedHeight = (viewportHeight * chartHeightPercentage) / 100;
    setChartHeight(calculatedHeight);
  }, [transformedArray, chartHeightP]);

  const options = {
    chart: {
      type: "boxPlot",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
    },
    xaxis: {
      categories: dataPoints.map((workplaceData) => `${workplaceData.workplace}`),
      labels: {
        style: {
          fontSize: "20px", // Adjust the font size for x-axis labels
        },
      },
    },
    yaxis: {
      min: 7,
      max: 20,
      labels: {
        style: {
          fontSize: "16px", // Adjust the font size for y-axis labels
        },
      },
    },
    title: {
      style: {
        fontSize: "20px", // Adjust the font size for the chart title
      },
    },
    subtitle: {
      style: {
        fontSize: "18px", // Adjust the font size for the chart subtitle
      },
    },
    tooltip: {
      style: {
        fontSize: "14px", // Adjust the font size for tooltips
      },
    },
  };

  const series = [
    {
      name: "Boxplot",
      data: dataPoints.map((workplaceData) => ({
        x: workplaceData.workplace,
        y: [
          workplaceData.values.min,
          workplaceData.values.q1,
          workplaceData.values.median,
          workplaceData.values.q3,
          workplaceData.values.max,
        ],
      })),
    },
  ];

  return (
    <div>
      {dataPoints.length!==0? (
        <ReactApexChart options={options} series={series} type="boxPlot" height={chartHeight} />
      ):(
        <p style={{textAlign:"center"}}>Es sind noch keine Daten vorhanden</p>
      )}
    </div>
  );
};

export default BoxPlotChart;
