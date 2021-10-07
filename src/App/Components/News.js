import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getNews } from '../Utils/getReq';
import moment from "moment";


export default function News() {


  const [data, setData] = useState(null);
  const [shownews, setShownews] = useState(true);


  const getAllNews=()=>{
    getNews().then((res)=>
      {
        if (res.success) {
        toast.success("News Updated")
        setData(res.data)
        }
        else{
          toast.error("No News Found")
        }
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
            <div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={shownews}
                  onChange={() => setShownews(!shownews)}
                />
              </div>
            </div>
          </div>
          {shownews && (
            <div>
              {data &&
                data.map((item, index) => (
                  <div className="row mt-4" key={index}>
                    <Link
                      className="mb-0"
                      to={{ pathname: `/news/${item.title}`, item: item }}
                    >
                      {item.title}
                    </Link>
                    <p className="flex-end text-muted my-0">
                      {moment(item.date).fromNow()}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    );
}