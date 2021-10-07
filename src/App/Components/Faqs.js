import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { getFaqs } from '../Utils/getReq';
import { toast } from "react-toastify";
import { Accordion } from 'react-bootstrap';
import Loader from './Loader';



export default function Faqs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  const getAllFaqs = () => {
    setLoading(true)
    getFaqs().then((res) => {
      if (res.success) {

        setData(res.data);
      } else {
        toast.error("FAQ's Missing");
      }
      setLoading(false)
    });
  };


  useEffect(() => {
    getAllFaqs();
  }, []);

  return (
    <div className="card border-0 bg-white rounded shadow-sm">
      <div className="card-body px-3">
        <div className="d-flex justify-content-between align-content-center">
          <div>
            <h5 className="card-title">
              <i class="bi bi-question-lg"></i>FAQ's
            </h5>
          </div>
          <div></div>
        </div>
        <Accordion flush>
          {data &&
            data.map((item, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
        {loading && <Loader />}
      </div>
    </div>
  );
}