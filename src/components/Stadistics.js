import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { getStats } from '../service/apis';
import GraficoVentas from './SellsChart';

const DonutChart = ({ currentMachineId }) => {
  const [series, setSeries] = useState([]);
  const [productos, setProductos] = useState(null);
  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10, // Ajusta el espacio entre las etiquetas y el borde del gráfico
          minAngleToShowLabel: 10, // Muestra las etiquetas solo cuando el ángulo de la porción del pastel es mayor que 10 grados
        }
      }
    },
    labels: [], // Las etiquetas se llenarán dinámicamente más adelante
    legend: {
      position: 'left', // Alinea la leyenda a la izquierda
      horizontalAlign: 'left', // Alinea la leyenda a la izquierda
    },
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const statsData = await getStats(currentMachineId);
        const productCounts = {};
        setProductos(statsData);

        for (const sell of statsData.sells.sells) {
          if (!productCounts[sell.product]) {
            productCounts[sell.product] = 0;
          }
          productCounts[sell.product]++;
        }

        const newSeries = Object.values(productCounts);
        const newLabels = Object.keys(productCounts).map(codigo => nombrePorCodigo[codigo] || codigo);

        const newOptions = {
          chart: {
            type: 'donut',
          },
          labels: newLabels,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5,
                minAngleToShowLabel: 10,
              }
            }
          },
          legend: {
            position: 'left',
            horizontalAlign: 'left',
          },
        };
        setSeries(newSeries);
        setOptions(newOptions);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [currentMachineId]);

  const nombrePorCodigo = {
    '6550da5696bc3f713a2fc0bb': ' ESP',
    '6550da5696bc3f713a2fc0bc':  '  Protoboard	',
    '6550d9a796bc3f713a2fc0ba': ' Led',
    '6550da5696bc3f713a2fc0bd': ' Pusher',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div id="donut-chart" style={{ height: '200px', width: '50%' }}>
        <ReactApexChart options={options} series={series} type="donut" height={200} />
      </div>
      <div id="donut-chart" style={{ height: '250px', width: '50%' }}>
        {productos && <GraficoVentas productos={productos} />}
      </div>
    </div>
  );
};

export default DonutChart;
