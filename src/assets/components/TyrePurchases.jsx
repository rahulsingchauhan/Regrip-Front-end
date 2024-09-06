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

// Registering necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Brand Wise Chart Component
const BrandWiseChart = () => {
  const data = {
    labels: ['JK Tyre', 'CEAT', 'Apollo', 'Bridgestone', 'Vikrant', 'MRF'],
    datasets: [
      {
        label: 'Tyres',
        data: [450, 320, 390, 345, 180, 270],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => `Tyres: ${context.raw}`, // Customize tooltip
        },
      },
      title: {
        display: true,
        text: 'Brand Wise',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

// Month Wise Chart Component
const MonthWiseChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Purchase',
        data: [640, 520, 780, 590, 630],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Purchase color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
      {
        label: 'Retread',
        data: [380, 450, 520, 410, 460],
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Retread color
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
      },
      {
        label: 'Scrap',
        data: [200, 300, 400, 350, 390],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Scrap color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Month Wise',
      },
      tooltip: {
        callbacks: {
          label: (context) => `Tyres: ${context.raw}`, // Customize tooltip
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 1000,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

// Main Tyre Purchases Component
const TyrePurchases = () => {
  return (
    <div className="p-8 grid grid-cols-2 gap-8 bg-gray-50">
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4">Tyre Purchases</h2>
        <BrandWiseChart />
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4">Tyre Purchases</h2>
        <MonthWiseChart />
      </div>
    </div>
  );
};

export default TyrePurchases;
