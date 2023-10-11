import React from "react";
import ReactApexChart from "react-apexcharts";

export default function ApexChart({ data, height }) {
  const vh = height?(window.innerHeight*height/100):(window.innerHeight*60/100);   
  
  const series = [
        ...Object.keys(data).map((workplace) => ({
          name: workplace,
          data: [
            data[workplace].reduce((sum, entry) => sum + entry.mental, 0) / data[workplace].length,
            data[workplace].reduce((sum, entry) => sum + entry.physical, 0) / data[workplace].length,
            data[workplace].reduce((sum, entry) => sum + entry.temporal, 0) / data[workplace].length,
            data[workplace].reduce((sum, entry) => sum + entry.performance, 0) / data[workplace].length,
            data[workplace].reduce((sum, entry) => sum + entry.effort, 0) / data[workplace].length,
            data[workplace].reduce((sum, entry) => sum + entry.frustration, 0) / data[workplace].length,
          ],
        })),
        {
          name: "optimal",
          data: [50, 50, 50, 50, 50, 50], // Values for the "optimal" series
        },
      ];

  const options = {
    chart: {
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title:{
      text: "NASA-TLX Radarplot",
      align: "center",
      style:{
        fontSize: "30px"
      } 
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
        'Geistig',
        'Körperlich',
        'Zeitlich',
        'Leistung',
        'Anstrengung',
        'Frustration',
      ],
      labels:{
        style:{
          fontSize:"16px"
        }
      }
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      style: {
        fontSize: "20px", // Adjust the font size for tooltips
      },
    },
  };

  return (
    <div id="chart">
      {series.length===1?(
        <p style={{textAlign:"center"}}>Es sind noch keine Daten vorhanden</p>
      ):(
        <ReactApexChart options={options} series={series} type="radar" height={vh} />
      )}
    </div>
  );
}

