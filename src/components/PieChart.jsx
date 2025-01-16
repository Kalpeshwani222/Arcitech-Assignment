import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import dummyData from "../data/data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const platformLabels = Object.keys(dummyData.usage_statistics.by_platform);
  const platformValues = Object.values(dummyData.usage_statistics.by_platform);

  const data = {
    labels: [...platformLabels],
    datasets: [
      {
        data: [...platformValues],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
