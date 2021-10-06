import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: 'Sales',
      data: [33, 53, 85, 41, 44, 65],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
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
