import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import dummyData from "../data/data.json";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const categoryLabels = Object.keys(dummyData.category_distribution);
  const categoryValues = Object.values(dummyData.category_distribution);

  const data = {
    labels: [...categoryLabels],
    datasets: [
      {
        label: "Category Distribution",
        data: [...categoryValues],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#e91e63"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
