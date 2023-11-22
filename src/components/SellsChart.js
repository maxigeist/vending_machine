import React from 'react';
import Chart from 'react-apexcharts';

const GraficoVentas = ({ productos }) => {
  if (!productos || !productos.sells || !productos.sells.sells) {
    return null; // Maneja el caso cuando los datos no están disponibles
  }

  const ventasPorDia = {};
  for (const sell of productos.sells.sells) {
    const fecha = new Date(sell.time).toLocaleDateString(); // Convierte la fecha a formato de día
    if (!ventasPorDia[fecha]) {
      ventasPorDia[fecha] = {};
    }
    if (!ventasPorDia[fecha][sell.product]) {
      ventasPorDia[fecha][sell.product] = 0;
    }
    ventasPorDia[fecha][sell.product]++;
  }

  const dias = Object.keys(ventasPorDia).sort(); // Ordena los días de forma ascendente

  const nombrePorCodigo = {
    '6550da5696bc3f713a2fc0bb': ' ESP',
    '6550da5696bc3f713a2fc0bc':  '  Protoboard	',
    '6550d9a796bc3f713a2fc0ba': ' Led',
    '6550da5696bc3f713a2fc0bd': ' Pusher',
    // Agrega otros productos según sea necesario
  };

  const series = Object.keys(productos.sells.sells.reduce((acc, sell) => {
    acc[sell.product] = true;
    return acc;
  }, {})).map(producto => ({
    name: nombrePorCodigo[producto] || producto,
    data: dias.map(dia => ventasPorDia[dia][producto] || 0), // Si no hay ventas para un día, se establece en 0
  }));

  const options = {
    chart: {
      id: 'graficoVentas',
      type: 'line',
    },
    xaxis: {
      categories: dias,
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" height={200} />
    </div>
  );
};

export default GraficoVentas;
