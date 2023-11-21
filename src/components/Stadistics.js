import React from 'react';
import { ApexChart } from 'react-apexcharts';

const PieChartComponent = () => {

  const data = [
    { title: 'Red', value: 12, color: '#FF6384' },
    { title: 'Blue', value: 19, color: '#36A2EB' },
    { title: 'Yellow', value: 3, color: '#FFCE56' },
    { title: 'Green', value: 5, color: '#4CAF50' },
    // { title: 'Purple', value: 2, color: '#9C27B0' },
    // { title: 'Orange', value: 3, color: '#FF9800' },
  ];
  
  const series = data.map((item) => {
    return {
      name: item.title,
      data: item.value,
      color: item.color,
    };
  });

  const options = {
    chart: {
      type: 'pie',
    },
    labels: data.map((item) => item.title),
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
        },
      },
    }],
  };

  return (
    <ApexChart
      series={series}
      options={options}
      type="pie"
      width={500}
      height={300}
    />
  );
};

export default PieChartComponent;
