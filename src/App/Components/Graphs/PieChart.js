import React,{useState} from 'react'
import { Pie } from 'react-chartjs-2';


const PieChart = (props) => {
  console.log(props.revenue.quarters);


  const showPie=(e)=>{
    setQuar(e.target.value);
    setDataSet(props.revenue.quarters[quar])
  }


  const [quar, setQuar] = useState(0);
  const [dataset, setDataSet] = useState([1,2,3,4]);


  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue Generated',
        data: dataset,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'],
          
        borderWidth: 1,
      },
    ],
  };
  const arr = props.revenue.years;
  
    return (
        <div className="card border-0 bg-white rounded shadow-sm m-2 " style={{ height: "320px" }} >
                <div className="card-body">
        <div >
            <Pie options={{ maintainAspectRatio: false }} height={"200%"} data={data} />
        </div>
        <div >
        <select className="form-select mt-2" value={quar} aria-label="Default select example" onChange={(e)=>showPie(e)}>
            {arr &&  
              arr.map((year,index)=>{
                return <option key={index} value={index}>{year}</option>
              })
            } 
          </select>
        </div>
        </div>
        </div>
    )
}

export default PieChart
