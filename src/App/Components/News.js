import React from 'react'
import { Link } from 'react-router-dom';

export default function News() {
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
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <Link className="mb-0" to="/">
              Lorem Ipsum is simply dummy text of the printing and types
              industry. is simply dummy text of the printing and types industry
            </Link>
            <p className="flex-end text-muted my-0">Wed 10 Sept</p>
          </div>
          <div className="row mt-4">
            <Link className="mb-0" to="/">
              Lorem Ipsum is simply dummy text of the printing and types
              industry. is simply dummy text of the printing and types industry
            </Link>
            <p className="flex-end text-muted my-0">Wed 10 Sept</p>
          </div>
          <div className="row mt-4">
            <Link className="mb-0" to="/">
              Lorem Ipsum is simply dummy text of the printing and types
              industry. is simply dummy text of the printing and types industry
            </Link>
            <p className="flex-end text-muted my-0">Wed 10 Sept</p>
          </div>
          <div className="row mt-4">
            <Link className="mb-0" to="/">
              Lorem Ipsum is simply dummy text of the printing and types
              industry. is simply dummy text of the printing and types industry
            </Link>
            <p className="flex-end text-muted my-0">Wed 10 Sept</p>
          </div>
        </div>
      </div>
    );
}
