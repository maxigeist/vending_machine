import React from 'react';
import Chart from 'react-apexcharts';

const GraficoVentas = ({ productos }) => {
  const options = {
    chart: {
      id: 'graficoVentas',
      type: 'line',
    },
    xaxis: {
      categories: productos[0].ventas.map(item => item.fecha),
    },
  };

  const series = productos.map(producto => ({
    name: producto.nombre,
    data: producto.ventas.map(item => item.cantidad),
  }));

  return (
    <div>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default GraficoVentas;
