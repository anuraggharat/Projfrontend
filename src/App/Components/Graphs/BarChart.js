import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [33, 53, 85, 41, 44, 65],
      backgroundColor: "#a29bfe",
      borderColor: "#a29bfe",
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
    return ( 
    <div>
    <Bar data={data} />
    </div>
    )
}

export default BarChart
