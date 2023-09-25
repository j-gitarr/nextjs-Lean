import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function BoxplotChart({ data, height }) {
  // Extract dimension labels (question0 to question26)
  const dimensionLabels = Array.from({ length: 27 }, (_, i) => `question${i}`);
  const vh = height?(window.innerHeight*height/100):(window.innerHeight*90/100);

  const seriesData = dimensionLabels.map((dimension) => {
    // Extract values for the current dimension
    const values = data.map((entry) => entry[dimension]).sort((a, b) => a - b);

    // Calculate statistics
    const min = Math.min(...values);
    const q1 = values[Math.floor(values.length / 4)];
    const median = values[Math.floor(values.length / 2)];
    const q3 = values[Math.floor((3 * values.length) / 4)];
    const max = Math.max(...values);

    return {
      x: dimension, // Label for x-axis
      y: [min, q1, median, q3, max], // Array representing min, q1, median, q3, and max
    };
  });

  // ApexCharts options
  const options = {
    chart: {
      type: 'boxPlot',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
      },
    },
    xaxis: {
      categories: dimensionLabels,
    },
    title: {
      text: 'BoxPlot KFZA',
      align: 'center',
      style:{
        fontSize: "30px"
      },
    },
  };

  // ApexCharts series
  const series = [
    {
      type: 'boxPlot',
      data: seriesData,
    },
  ];

  return (
    <div className="boxplot-chart">
      <ApexCharts options={options} series={series} type="boxPlot" height={vh} />
    </div>
  );
}
