import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = ({label, value, title}) => {
  const dataOlah = {
    labels: label,
    datasets: [
      {
        label: title,
        data: value,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar data={dataOlah}/>
  )
}

export default BarChartComponent