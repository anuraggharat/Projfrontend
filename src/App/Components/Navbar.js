import React from 'react'

export default function Navbar(props) {
    console.log(props)
    return (
      <nav className="navbar d-flex justify-content-between navbar-expand-lg navbar-light bg-light m-0 px-3 shadow-sm">
        <button
          onClick={() => props.sidebarToggler()}
          className="btn px-3 bg-purple text-white"
        >
          <i className="bi bi-list"></i>
        </button>
        <h4 className="font-weight-bold">Revenue Dashboard</h4>
        <div className="navbar-nav ">
          
        </div>
      </nav>
    );
}
