import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getNews } from '../Utils/getReq';
import moment from "moment";
import Loader from './Loader';


export default function News() {


  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false)


  const getAllNews=()=>{
    setLoading(true)
    getNews().then((res)=>
      {
        if (res.success) {
        toast.success("News Updated")
        setData(res.data)
        }
        else{
          toast.error("No News Found")
        }
      setLoading(false);
      }

    )
  }

  useEffect(() => {
    getAllNews()
    
  }, [])

    return (
      <div className="card border-0 bg-white rounded shadow-sm">
        <div className="card-body px-3">
          <div className="d-flex justify-content-between align-content-center">
            <div>
              <h5 className="card-title">
                <i className="bi bi-newspaper"></i>News
              </h5>
            </div>
            <div></div>
          </div>
          <div>
            {data &&
              data.map((item, index) => (
                <div className="row mt-4" key={index}>
                  <Link
                    className="mb-0"
                    to={{ pathname: "/user/news", item: item }}
                  >
                    {item.title}
                  </Link>
                  <p className="flex-end text-muted my-0">
                    {moment(item.date).fromNow()}
                  </p>
                </div>
              ))}
            {loading && <Loader />}
          </div>
        </div>
      </div>
    );
}