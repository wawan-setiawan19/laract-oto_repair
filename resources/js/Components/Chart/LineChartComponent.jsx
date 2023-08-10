import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const LineChartComponent = ({label, value, title}) => {
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
    <Line data={dataOlah}/>
  )
}

export default LineChartComponent