import React, { useEffect, useState } from 'react'
import moment from "moment";
import { Link,Redirect } from 'react-router-dom';


export default function NewsItem(props) {
    console.log(props.location.item)
    
    


    const [item, setItem] = useState(props.location.item);

    const setInitialvalues=()=>{
        setItem(props.location.item)
    }

    useEffect(() => {
        setInitialvalues()
    }, [])

if (!props.location.item) {
  return <Redirect to="/user/dashboard" />;
}

    return (
      <div className="container my-5 align-items-center d-flex flex-column">
        <div className="d-flex justify-content-start w-100">
          <Link to="/user/dashboard" className="display-6">
            <i class="bi bi-arrow-left"></i>
          </Link>
        </div>
        <img src={item.imagelink} className="img-fluid align-self-center" />
        <div className="container w-75">
          <h2 className="mt-4">{item.title}</h2>
          <p className="text-muted mt-0">{moment(item.date).fromNow()}</p>
          <div className="mb-3">
            {item.tags.map((i, index) => (
              <span
                className="rounded-pill bg-purple px-3 py-1 text-white mx-2"
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
          <p>{item.text}</p>
          <div className="d-flex justify-content-end">
            <p className="lead">-{item.publisher}</p>
          </div>
          <div className="text-center">
            <a href={item.link} className="bg-purple btn text-white">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
