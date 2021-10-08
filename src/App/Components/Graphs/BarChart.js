import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart = (props) => {
  
  const data = {
    labels: props.revenue.years,//["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: props.revenue.users,//[33, 53, 85, 41, 44, 65],
        backgroundColor: "#a29bfe",
        borderColor: "#a29bfe",
        borderWidth: 1,
      },
    ],
  };
    return ( 
      <div className="card border-0 bg-white rounded shadow-sm m-2"style={{ height: "320px" }} >
                <div className="card-body">
                  <Bar data={data} />
                <p className="text-center mt-2">No of new users added</p>
    </div>
    </div>
    )
}

export default BarChart
