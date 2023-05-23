import React from "react";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";
import { ProgressBar } from "primereact/progressbar";
import { Image } from "primereact/image";

const chart1 = {
  labels: ["8Sun", "9Mon", "10Thu", "11Wed", "12Fri", "13Sat", "14Sun"],
  datasets: [
    {
      label: "Revenue",
      data: [12, 19, 3, 5, 2, 3, 9],
      borderColor: ["#FFA928"],
      borderWidth: 4,
      fill: true,
      backgroundColor: ["rgba(255, 169, 40, .2)"],
      tension: 0.4,
    },
  ],
};

const chartOptions1 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  hover: {
    mode: "index",
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

const chartOptions2 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  hover: {
    mode: "index",
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: "transparent",
      },
      ticks: {
        color: "#BFC2C6",
      },
    },
    y: {
      display: true,
      grid: {
        color: "rgba(191, 194, 198, .45)",
        borderDash: [5, 10],
      },
      ticks: {
        color: "#BFC2C6",
        min: 0,
        stepSize: 5,
      },
    },
  },
};

const getChart = () => {
  const borderColor =
    getComputedStyle(document.body).getPropertyValue("--primary-color") ||
    "#2c84d8";
  const backgroundColor =
    getComputedStyle(document.body).getPropertyValue(
      "--primary-lighter-color"
    ) || "#2c84d8";
  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 19, 3, 5, 2, 3, 9],
        borderColor: [borderColor],
        borderWidth: 4,
        fill: true,
        backgroundColor: [backgroundColor],
        tension: 0.4,
      },
    ],
  };
};

const chart2 = getChart();

const Dashboard = () => {
  return (
    <div className="flex justify-content-center">
  

   
    </div>
  );
};

const comparisonFn = function (prevProps, nextProps) {
  return (
    prevProps.location.pathname === nextProps.location.pathname &&
    prevProps.colorMode === nextProps.colorMode
  );
};

export default React.memo(Dashboard, comparisonFn);
