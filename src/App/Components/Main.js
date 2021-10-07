import React, { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from './Graphs/LineChart';
import BarChart from './Graphs/BarChart';
import CombinedChart from './Graphs/CombinedChart';
import News from './News';
import Faqs from './Faqs';

const Main = (props) => {



    useEffect(() => {
      console.log(props.some);
    }, [props.some])
    

    return (
      <>
        <div class="container mt-5 mb-5">
          <div class="row">
            <div className="col-lg-6 mb-5">
              <div className="card border-0 bg-white rounded shadow-sm">
                <div className="card-body">
                  <LineChart />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="card border-0 bg-white  rounded shadow-sm">
                <div className="card-body">
                  <LineChart />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="card border-0 bg-white  rounded shadow-sm">
                <div className="card-body">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="card border-0 bg-white  rounded shadow-sm">
                <div className="card-body">
                  <CombinedChart />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <News />
            </div>
            <div className="col-lg-6 mb-5">
                <Faqs/>
              
            </div>
          </div>
        </div>
      </>
    );
}

export default Main
