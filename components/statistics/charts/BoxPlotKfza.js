import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function BoxplotChart({ data }) {
  // Extract dimension labels (question0 to question26)
  const dimensionLabels = Array.from({ length: 27 }, (_, i) => `question${i}`);

  // Prepare data for ApexCharts
  const seriesData = dimensionLabels.map((dimension) => ({
    x: dimension, // Label for x-axis
    y: data.map((entry) => entry[dimension]).sort((a, b) => a - b),
  }));

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
      text: 'BoxPlot Chart for Dimensions',
      align: 'left',
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
      <ApexCharts options={options} series={series} type="boxPlot" height={800} />
    </div>
  );
}
