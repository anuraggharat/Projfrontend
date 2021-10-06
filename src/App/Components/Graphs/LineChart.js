import React from 'react'
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "#a29bfe",
      borderColor: "#a29bfe",
    },
  ],
};

const LineChart = () => {
    return (
        <div>
            <Line data={data} />        
        </div>
    )
}

export default LineChart
