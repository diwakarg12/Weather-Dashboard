/* eslint-disable react/prop-types */
// import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.title),
    datasets: [
      {
        label: 'Temperature',
        data: data.map((d) => d.temp),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='my-6'>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
