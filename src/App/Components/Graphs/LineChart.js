import React from 'react'
import { Line } from "react-chartjs-2";


const LineChart = (props) => {
  const data = {
    labels: props.revenue.years,//["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: props.revenue.net,//[33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: "#a29bfe",
        borderColor: "#a29bfe",
      },
    ],
  };
    return (
      <div className="card border-0 bg-white rounded shadow-sm m-2"style={{ height: "320px" }} >
                <div className="card-body">
        <div className="col-md-12">
            <Line data={data} />        
        </div>
        </div>
        </div>
    )
}

export default LineChart
