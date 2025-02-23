import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VotingChart = ({ data }) => {
  const chartData = {
    labels: ['Ja', 'Nei', 'Blank'],
    datasets: [
      {
        label: 'Stemmer',
        data: [data.yes, data.no, data.blank],
        backgroundColor: ['#4caf50', '#f44336', '#9e9e9e']
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default VotingChart;
