import React from 'react'

import { Bar } from 'react-chartjs-2';



const CombinedChart = (props) => {
  const data = {
    labels: props.revenue.years,//["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        data: props.revenue.net,//[33, 53, 85, 41, 44, 65],
        fill: false,
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        type: "bar",
        label: "Dataset 2",
        data: props.revenue.net,//[33, 53, 85, 41, 44, 65],
  
        backgroundColor: "#a29bfe",
        borderColor: "#a29bfe",
        borderWidth: 1,
      },
    ],
  };
    return (
      <div className="card border-0 bg-white rounded shadow-sm m-2"style={{ height: "320px" }} >
                <div className="card-body">
        <div className="">
            <Bar data={data} />
        </div>
        </div>
        </div>
    )
}

export default CombinedChart
