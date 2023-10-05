import React, { useEffect } from "react";
import ApexCharts from "react-apexcharts";
import { median, quantile } from "simple-statistics";

function dataStatistics(entries) {
  const min = Math.min(...entries);
  const q1 = quantile([...entries], 0.25)
  const m = median(entries)
  const q3 = quantile([...entries], 0.75);
  const max = Math.max(...entries);
  return [min, q1, m, q3, max];
}

export default function BoxplotChart({ data, height }) {
  // Extract dimension labels (question0 to question26)
  const dimensionLabels = Array.from({ length: 26 }, (_, i) => `question${i}`);
  const vh = height
    ? (window.innerHeight * height) / 100
    : (window.innerHeight * 90) / 100;

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

  useEffect(() => {}, []);

  // KFZA-SKALA
  const vielseitigkeitData = [];
  const ganzheitlichkeitData = [];
  const handlungsspielraumData = [];
  const sozialeRueckendeckungData = [];
  const zusammenarbeitData = [];
  const qualitativeArbeitsbelastungenData = [];
  const quantiativeArbeitsbelastungenData = [];
  const arbeitsunterbrechnugnenData = [];
  const umgebungsbelastungenData = [];
  const informationMitspracheData = [];
  const betrieblicheLeistungenData = [];

  data.map((entry) => {
    vielseitigkeitData.push(entry.question0);
    vielseitigkeitData.push(entry.question1);
    vielseitigkeitData.push(entry.question2);
    ganzheitlichkeitData.push(entry.question3);
    ganzheitlichkeitData.push(entry.question4);
    handlungsspielraumData.push(entry.question13);
    handlungsspielraumData.push(entry.question14);
    handlungsspielraumData.push(entry.question15);
    sozialeRueckendeckungData.push(entry.question16);
    sozialeRueckendeckungData.push(entry.question17);
    sozialeRueckendeckungData.push(entry.question18);
    zusammenarbeitData.push(entry.question19);
    zusammenarbeitData.push(entry.question20);
    zusammenarbeitData.push(entry.question21);
    qualitativeArbeitsbelastungenData.push(entry.question5);
    qualitativeArbeitsbelastungenData.push(entry.question6);
    quantiativeArbeitsbelastungenData.push(entry.question7);
    quantiativeArbeitsbelastungenData.push(entry.question8);
    arbeitsunterbrechnugnenData.push(entry.question9);
    arbeitsunterbrechnugnenData.push(entry.question10);
    umgebungsbelastungenData.push(entry.question11);
    umgebungsbelastungenData.push(entry.question12);
    informationMitspracheData.push(entry.question22);
    informationMitspracheData.push(entry.question23);
    betrieblicheLeistungenData.push(entry.question24);
    betrieblicheLeistungenData.push(entry.question25);
  });

  const vielseitigkeitStats = dataStatistics(vielseitigkeitData);
  const ganzheitlichkeitStats = dataStatistics(ganzheitlichkeitData);
  const handlungsspielraumStats = dataStatistics(handlungsspielraumData);
  const sozialeRueckendeckungStats = dataStatistics(sozialeRueckendeckungData);
  const zusammenarbeitStats = dataStatistics(zusammenarbeitData);
  const qualitativeArbeitsbelastungenStats = dataStatistics(qualitativeArbeitsbelastungenData);
  const quantiativeArbeitsbelastungenStats = dataStatistics(quantiativeArbeitsbelastungenData);
  const arbeitsunterbrechnugnenStats = dataStatistics(arbeitsunterbrechnugnenData);
  const umgebungsbelastungenStats = dataStatistics(umgebungsbelastungenData);
  const informationMitspracheStats = dataStatistics(informationMitspracheData);
  const betrieblicheLeistungenStats = dataStatistics(betrieblicheLeistungenData);


  //ASPEKT DER ARBEITSSITUATION
  // const arbeitsinhalt = [];
  // arbeitsinhalt.push(...vielseitigkeitData);
  // arbeitsinhalt.push(...ganzheitlichkeitData);
  // const arbeitsinhaltStats = dataStatistics(arbeitsinhalt);
  // console.log(arbeitsinhaltStats);

  // const ressourcen = [];
  // ressourcen.push(...handlungsspielraumData);
  // ressourcen.push(...sozialeRueckendeckungData);
  // ressourcen.push(...zusammenarbeitData);
  // const ressourcenStats = dataStatistics(ressourcen);

  // const stressoren = [];
  // stressoren.push(...qualitativeArbeitsbelastungenData);
  // stressoren.push(...quantiativeArbeitsbelastungenData);
  // stressoren.push(...arbeitsunterbrechnugnenData);
  // stressoren.push(...umgebungsbelastungenData);
  // const stressorenStats = dataStatistics(stressoren);

  // const organisationsklima = [];
  // organisationsklima.push(...informationMitspracheData);
  // organisationsklima.push(...betrieblicheLeistungenData);
  // const organisationsklimaStats = dataStatistics(organisationsklima);

  /////////ApexCharts
  //Arbeitsinhalt
  // const arbeitsinhaltSeries = [
  //   { type: "boxPlot", data: [{ x: "Arbeitsinhalt", y: arbeitsinhaltStats }] },
  // ];
  // const arbeitsinhaltOptions = {
  //   chart: {
  //     type: "boxPlot",
  //   },
    
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       barHeight: "50%",
  //     },
  //   },
  //   xaxis: {
  //     tickAmount:5, 
  //     min: 0,
  //     max: 5,
  //     labels:{
  //       showDuplicates: true,
  //       style:{
  //         fontSize: "16px"
  //       }
  //     }
  //   },
  //   yaxis:{
  //     categories: [1,2,3,4,5],
  //     labels:{
  //       show: false,
  //     }
  //   },
  //   title: {
  //     text: "Arbeitsinhalt",
  //     align: "center",
  //     style: {
  //       fontSize: "30px",
  //     },
  //   },
  //   tooltip: {
  //     style: {
  //       fontSize: "20px", // Adjust the font size for tooltips
  //     },
  //   },
  // };

  // //Ressourcen
  // const ressourcenSeries = [
  //   { type: "boxPlot", data: [{ x: "Ressourcen", y: ressourcenStats }] },
  // ];
  // const ressourcenOptions = {
  //   chart: {
  //     type: "boxPlot",
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       barHeight: "50%",
  //     },
  //   },
  //   xaxis: {
  //     tickAmount:5, 
  //     min: 0,
  //     max: 5,
  //     labels:{
  //       style:{
  //         fontSize: "16px"
  //       }
  //     }
  //   },
  //   yaxis:{
  //     labels:{
  //       show: false,
  //     }
  //   },
  //   title: {
  //     text: "Ressourcen",
  //     align: "center",
  //     style: {
  //       fontSize: "30px",
  //     },
  //   },
  //   tooltip: {
  //     style: {
  //       fontSize: "20px", // Adjust the font size for tooltips
  //     },
  //   },
  // };

  // //Stressoren
  // const stressorenSeries = [
  //   { type: "boxPlot", data: [{ x: "Stressoren", y: stressorenStats }] },
  // ];
  // const stressorenOptions = {
  //   chart: {
  //     type: "boxPlot",
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       barHeight: "50%",
  //     },
  //   },
  //   xaxis: {
  //     tickAmount:5, 
  //     min: 0,
  //     max: 5,
  //     labels:{
  //       style:{
  //         fontSize: "16px"
  //       }
  //     }
  //   },
  //   yaxis:{
  //     labels:{
  //       show: false,
  //     }
  //   },
  //   title: {
  //     text: "Stressoren",
  //     align: "center",
  //     style: {
  //       fontSize: "30px",
  //     },
  //   },
  //   tooltip: {
  //     style: {
  //       fontSize: "20px", // Adjust the font size for tooltips
  //     },
  //   },
  // };

  // //Organisationsklima 
  // const organisationsklimaSeries = [
  //   { type: "boxPlot", data: [{ x: "Organisationsklima", y: organisationsklimaStats }] },
  // ];
  // const organisationsklimaOptions = {
  //   chart: {
  //     type: "boxPlot",
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       barHeight: "50%",
  //     },
  //   },
  //   xaxis: {
  //     tickAmount:5, 
  //     min: 0,
  //     max: 5,
  //     labels:{
  //       style:{
  //         fontSize: "16px"
  //       }

  //     }
  //   },
  //   yaxis:{
  //     labels:{
  //       show: false,
  //     }
  //   },
  //   title: {
  //     text: "Organisationsklima",
  //     align: "center",
  //     style: {
  //       fontSize: "30px",
  //     },
  //   },
  // };

  //Vielseitigkeit
  const vielseitigkeitSeries = [
    { type: "boxPlot", data: [{ x: "Vielseitigkeit", y: vielseitigkeitStats }] },
  ];
  const vielseitigkeitOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Vielseitigkeit",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

//Ganzheitlichkeit 
  const ganzheitlichkeitSeries = [
    { type: "boxPlot", data: [{ x: "Ganzheitlichkeit", y: ganzheitlichkeitStats }] },
  ];
  const ganzheitlichkeitOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Ganzheitlichkeit",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Handlungsspielraum 
  const handlungsspielraumSeries = [
    { type: "boxPlot", data: [{ x: "Handlungsspielraum", y: handlungsspielraumStats }] },
  ];
  const handlungsspielraumOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Handlungspielraum",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };


  //Soziale Rückendeckung 
  const sozialeRueckendeckungSeries = [
    { type: "boxPlot", data: [{ x: "Soziale Rückendeckung", y: sozialeRueckendeckungStats }] },
  ];
  const sozialeRueckendeckungOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Soziale Rückendeckung",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Zusammenarbeit 
  const zusammenarbeitSeries = [
    { type: "boxPlot", data: [{ x: "Zusammenarbeit", y: zusammenarbeitStats }] },
  ];
  const zusammenarbeitOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Zusammenarbeit",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Qualitative Arbeitsbelastung 
  const qualitativeArbeitsbelastungenSeries = [
    { type: "boxPlot", data: [{ x: "Qualitative Arbeitsbelastung", y: qualitativeArbeitsbelastungenStats }] },
  ];
  const qualitativeArbeitsbelastungenOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Qualitative Arbeitsbelastung",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Quantitative Arbeitsbelastung 
  const quantiativeArbeitsbelastungenSeries = [
    { type: "boxPlot", data: [{ x: "Quantitative Arbeitsbelastungen", y: quantiativeArbeitsbelastungenStats }] },
  ];
  const quantiativeArbeitsbelastungenOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Quantitative Arbeitsbelastungen",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Arbeitsunterbrechungen 
  const arbeitsunterbrechnugnenSeries = [
    { type: "boxPlot", data: [{ x: "Arbeitsunterbrechungen", y: arbeitsunterbrechnugnenStats }] },
  ];
  const arbeitsunterbrechnugnenOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Arbeitsunterbrechungen",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Umgebungsbelastungen 
  const umgebungsbelastungenSeries = [
    { type: "boxPlot", data: [{ x: "Umgebungsbelastungen", y: umgebungsbelastungenStats }] },
  ];
  const umgebungsbelastungenOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Umgebungsbelastungen",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Information und Mitsprache
  const informationMitspracheSeries = [
    { type: "boxPlot", data: [{ x: "Information und Mitsprache", y: informationMitspracheStats }] },
  ];
  const informationMitspracheOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Information und Mitsprache",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };

  //Betriebliche Leistungen 
  const betrieblicheLeistungenSeries = [
    { type: "boxPlot", data: [{ x: "Betriebliche Leistungen", y: betrieblicheLeistungenStats }] },
  ];
  const betrieblicheLeistungenOptions = {
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
      tickAmount:5, 
      min: 0,
      max: 5,
      labels:{
        style:{
          fontSize: "16px"
        }

      }
    },
    yaxis:{
      labels:{
        show: false,
      }
    },
    title: {
      text: "Betriebliche Leistungen",
      align: "center",
      style: {
        fontSize: "30px",
      },
    },
  };


  return (
    <div className="boxplot-chart">
      {/* <ApexCharts options={options} series={series} type="boxPlot" height={vh} /> */}

      <ApexCharts
        options={vielseitigkeitOptions}
        series={vielseitigkeitSeries}
        type="boxPlot"
        height={300}
      />
      
      <ApexCharts
        options={ganzheitlichkeitOptions}
        series={ganzheitlichkeitSeries}
        type="boxPlot"
        height={300}
      />
      
      <ApexCharts
        options={handlungsspielraumOptions}
        series={handlungsspielraumSeries}
        type="boxPlot"
        height={300}
      />

      <ApexCharts
        options={sozialeRueckendeckungOptions}
        series={sozialeRueckendeckungSeries}
        type="boxPlot"
        height={300}
      />

      <ApexCharts
        options={zusammenarbeitOptions}
        series={zusammenarbeitSeries}
        type="boxPlot"
        height={300}
      />
      <ApexCharts
        options={qualitativeArbeitsbelastungenOptions}
        series={qualitativeArbeitsbelastungenSeries}
        type="boxPlot"
        height={300}
      />
      <ApexCharts
        options={quantiativeArbeitsbelastungenOptions}
        series={quantiativeArbeitsbelastungenSeries}
        type="boxPlot"
        height={300}
      />
      <ApexCharts
        options={arbeitsunterbrechnugnenOptions}
        series={arbeitsunterbrechnugnenSeries}
        type="boxPlot"
        height={300}
      />
      <ApexCharts
        options={umgebungsbelastungenOptions}
        series={umgebungsbelastungenSeries}
        type="boxPlot"
        height={300}
      />
      <ApexCharts
        options={informationMitspracheOptions}
        series={informationMitspracheSeries}
        type="boxPlot"
        height={300}
      />
      <ApexCharts
        options={betrieblicheLeistungenOptions}
        series={betrieblicheLeistungenSeries}
        type="boxPlot"
        height={300}
      />
    </div>
  );
}
