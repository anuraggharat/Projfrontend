import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { getFaqs } from '../Utils/getReq';
import { toast } from "react-toastify";
import { Accordion } from 'react-bootstrap';



export default function Faqs() {
  const [data, setData] = useState(null);
  const [showfaqs, setshowFaqs] = useState(true);

  const getAllFaqs = () => {
    getFaqs().then((res) => {
      if (res.success) {
        toast.success("FAQ's Found");
        setData(res.data);
      } else {
        toast.error("FAQ's Missing");
      }
    });
  };

  console.log(showfaqs)

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
          <div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={showfaqs}
                onChange={() => setshowFaqs(!showfaqs)}
              />
            </div>
          </div>
        </div>
        {showfaqs && (
          <Accordion flush>
            {data &&
              data.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
