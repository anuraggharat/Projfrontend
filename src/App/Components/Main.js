import React, { useState } from 'react';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from './Graphs/LineChart';
import BarChart from './Graphs/BarChart';
import CombinedChart from './Graphs/CombinedChart';
import News from './News';
import Faqs from './Faqs';
import { getRevenue,putProfile } from '../Utils/getReq'

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";
import PieChart from './Graphs/PieChart';


const Main = (props) => {

  const [revenue, setRevenue] = useState({})

  const processRevenue = () => {
    getRevenue().then((res) => {
      if (res.success) {    
        const revenueList = res.data
        const rv = {
          years: revenueList.flatMap(rv => [rv.year]),
          users: revenueList.flatMap(rv => [rv.users_this_year]),
          net: revenueList.flatMap(rv => [rv.total_revenue]),
          quarters: revenueList.flatMap(rv => [rv.qoq_revenue]), 
                   
        }
        setRevenue(rv)
      } else {
        //toast.error("Couldn't load Revenue");
      }
    });
  };

  console.log(revenue)

  useEffect(() => {
    processRevenue();
  }, [])

  
    // useEffect(() => {
    //   setItems(props.profile);
    // }, [props.profile])


    const [items, setItems] = React.useState(props.user.profile);

    const [val,setVal] = React.useState(true);
    //Detect change in window size
    useEffect(() => {
      function handleResize() {
        if(window.innerWidth<720){
          setVal(false);
        }
        else{
          setVal(true);
        }
      
  }
      window.addEventListener('resize', handleResize)
    })
    const chartArr = [<LineChart revenue={revenue}/>,<BarChart revenue={revenue}/>,<CombinedChart revenue={revenue}/>,<PieChart revenue={revenue}/>];
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
    console.log(items);
      
    }

    const profileUpdate = () =>{
      putProfile(items,props.user.email);
      //console.log(props.user.email);
    }

    return (
      <div className="h-100">
        <div className="px-5 d-flex d-flex justify-content-end">
          <button className="btn btn-success"  onClick={profileUpdate} disabled={props.user.profile==items}>
            Save <i class="bi bi-check-circle"></i>
          </button>
        </div>
        <div className="min-vh-100 content-container mb-5 pb-5">
          <GridContextProvider onChange={onChange}>
            <GridDropZone
              id="items"
              boxesPerRow={val == true ? 2 : 1}
              rowHeight={300}
              style={{ height: "400px", margin: "20px" }}
            >
              {items.map((item) => (
                <GridItem key={item} className="mb-5">
                  <div className="" >
                    <div className="bg-background py-2" >{chartArr[item]}</div>
                  </div>
                </GridItem>
              ))}
            </GridDropZone>
          </GridContextProvider>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-6 mb-5 col-sm-12">
              {props.shownews && <News />}
            </div>
            <div className="col-lg-6 mb-5 col-sm-12">
              {props.showfaqs && <Faqs />}
            </div>
          </div>
        </div>

          </div>
    );
}
export default Main
