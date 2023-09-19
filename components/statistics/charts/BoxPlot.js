// // import React, { useEffect, useState } from "react";
// // import ReactApexChart from "react-apexcharts";

// // const BoxPlotChart = ({rawDataPoints, xLabel, chartHeightP}) => {
// //   const [dataPoints, setDataPoints] = useState([]);
// //   const [chartHeight, setChartHeight] = useState(0);


// //   useEffect(() => {
// //     // Calculate quartiles and other statistics only on the client-side
// //     if (typeof window !== "undefined") {
// //       // Perform quartile calculations and other statistics here
// //       const sortedDataPoints = rawDataPoints.sort((a, b) => a - b);
// //       const q1 = sortedDataPoints[Math.floor(sortedDataPoints.length * 0.25)];
// //       const median = sortedDataPoints[Math.floor(sortedDataPoints.length * 0.5)];
// //       const q3 = sortedDataPoints[Math.floor(sortedDataPoints.length * 0.75)];
// //       const min = Math.min(...sortedDataPoints);
// //       const max = Math.max(...sortedDataPoints);

// //       // Set the processed data to the state
// //       setDataPoints({ q1, median, q3, min, max });
// //     }

// //     const viewportHeight = window.innerHeight;
// //     const chartHeightPercentage = chartHeightP; // You can adjust this value as needed
// //     const calculatedHeight = (viewportHeight * chartHeightPercentage) / 100;
// //     setChartHeight(calculatedHeight);


// //   }, []);

// //     const options = {
// //         chart: {
// //             type: "boxPlot",
// //         },
// //         plotOptions:{
// //             bar:{
// //                 horizontal: true,
// //                 barHeight: "50%"
// //             },
// //         },
// //         xaxis: {
// //             labels: {
// //                 style: {
// //                 fontSize: "20px", // Adjust the font size for x-axis labels
// //                 },
// //             },
// //         },
// //         yaxis: {
// //             labels: {
// //                 style: {
// //                 fontSize: "16px", // Adjust the font size for y-axis labels
// //                 },
// //             },
// //         },
// //         title: {
// //             style: {
// //                 fontSize: "20px", // Adjust the font size for the chart title
// //             },
// //         },
// //         subtitle: {
// //             style: {
// //                 fontSize: "18px", // Adjust the font size for the chart subtitle
// //             },
// //         },
// //         tooltip: {
// //             style: {
// //                 fontSize: "14px", // Adjust the font size for tooltips
// //             },
// //         },
// //     };

// //   const series = [
// //     {
// //       name: "Boxplot",
// //       data: [
// //         {
// //           x: "B1",
// //           y: [dataPoints.min, dataPoints.q1, dataPoints.median, dataPoints.q3, dataPoints.max],
// //         },
// //       ],
// //     },
// //   ];

// //   return (
// //     <div>
// //       <ReactApexChart options={options} series={series} type="boxPlot" height={chartHeight} />
// //     </div>
// //   );
// // };

// // export default BoxPlotChart;


// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const BoxPlotChart = ({ transformedArray, chartHeightP }) => {
//   const [dataPoints, setDataPoints] = useState([]);
//   const [chartHeight, setChartHeight] = useState(0);

//   useEffect(() => {
//     // Calculate quartiles and other statistics only on the client-side
//     if (typeof window !== "undefined") {
//       // Extract all values from transformedArray and flatten them into a single array
//       const allValues = transformedArray.flatMap((workplaceData) => workplaceData.values);

//       // Perform quartile calculations and other statistics here
//       const sortedDataPoints = allValues.sort((a, b) => a - b);
//       const q1 = sortedDataPoints[Math.floor(sortedDataPoints.length * 0.25)];
//       const median = sortedDataPoints[Math.floor(sortedDataPoints.length * 0.5)];
//       const q3 = sortedDataPoints[Math.floor(sortedDataPoints.length * 0.75)];
//       const min = Math.min(...sortedDataPoints);
//       const max = Math.max(...sortedDataPoints);

//       // Set the processed data to the state
//       setDataPoints({ q1, median, q3, min, max });
//     }

//     const viewportHeight = window.innerHeight;
//     const chartHeightPercentage = chartHeightP; // You can adjust this value as needed
//     const calculatedHeight = (viewportHeight * chartHeightPercentage) / 100;
//     setChartHeight(calculatedHeight);
//   }, [transformedArray, chartHeightP]);

//   const options = {
//     chart: {
//       type: "boxPlot",
//     },
//     plotOptions: {
//         bar: {
//           horizontal: true,
//           barHeight: '50%'
//         },
//     },
//     xaxis: {
//       categories: transformedArray.map((workplaceData) => ` ${workplaceData.workplace}`),
//       labels: {
//         style: {
//           fontSize: "20px", // Adjust the font size for x-axis labels
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           fontSize: "16px", // Adjust the font size for y-axis labels
//         },
//       },
//     },
//     title: {
//       style: {
//         fontSize: "20px", // Adjust the font size for the chart title
//       },
//     },
//     subtitle: {
//       style: {
//         fontSize: "18px", // Adjust the font size for the chart subtitle
//       },
//     },
//     tooltip: {
//       style: {
//         fontSize: "14px", // Adjust the font size for tooltips
//       },
//     },
//   };

//   const series = [
//     {
//       name: "Boxplot",
//       data: transformedArray.map((workplaceData) => ({
//         x: workplaceData.workplace,
//         y: [
//           workplaceData.values.min,
//           workplaceData.values.q1,
//           workplaceData.values.median,
//           workplaceData.values.q3,
//           workplaceData.values.max,
//         ],
//       })),
//     },
//   ];

//   return (
//     <div>
//       <ReactApexChart options={options} series={series} type="boxPlot" height={chartHeight} />
//     </div>
//   );
// };

// export default BoxPlotChart;


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
      <ReactApexChart options={options} series={series} type="boxPlot" height={chartHeight} />
    </div>
  );
};

export default BoxPlotChart;
