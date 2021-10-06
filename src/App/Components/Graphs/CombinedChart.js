import React from 'react'

import { Bar } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
    backgroundColor: "red",
    borderColor: "red",
      borderWidth: 1,
      
      
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      data: [33, 53, 85, 41, 44, 65],
      
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    }
    
  ],
};

const CombinedChart = () => {
    return (
        <div>
            <Bar data={data} />
        </div>
    )
}

export default CombinedChart
