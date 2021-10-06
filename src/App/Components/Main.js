import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from './Graphs/LineChart';
import BarChart from './Graphs/BarChart';
import CombinedChart from './Graphs/CombinedChart';

const Main = () => {
    return (
        <>
<div class="container">
  <div class="row">
    <div className="col">
        <div className="card">
            <div className="card-body">
                <LineChart/>
            </div>
        </div>
    </div>
    <div class="col">
        <div className="card">
            <div className="card-body">
                <LineChart/>
            </div>
        </div>
    </div>
    <div class="w-100"></div>
    <div class="col">
        <div className="card">
            <div className="card-body">
                <BarChart/>
            </div>
        </div>
    </div>
    <div class="col">
        <div className="card">
            <div className="card-body">
                <CombinedChart/>
            </div>
        </div>
    </div>
  </div>
</div>
            
</>
    )
}

export default Main
