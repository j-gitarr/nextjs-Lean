import React from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart({ data }) {
  const workplaceLabels = data.map((entry) => entry.workplace);
  const values = data.map((entry) => entry.values[entry.values.length - 1]);

  const getColor = (value) => {
    if (value <= 25) {
      return "#00FF00"; // Green for values 0-25
    } else if (value <= 50) {
      return "#FFFF00"; // Yellow for values 26-50
    } else {
      return "#FF0000"; // Red for values above 50
    }
  };

  const colors = values.map((value) => getColor(value));

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions:{
      bar:{
        distributed: true,
      }
    },
    xaxis: {
      categories: workplaceLabels,
    },
    colors: colors,
  };

  const series = [
    {
      name: "Values",
      data: values,
    },
  ];

  return (
    <div id="chart">
      {data.length !== 0 ? (
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      ) : (
        <p style={{ textAlign: "center" }}>Es sind noch keine Daten vorhanden</p>
      )}
    </div>
  );
}
