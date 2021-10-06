import React from 'react'
import User from '../Assets/user.png'

export default function Sidebar({ sidebarToggler }) {
  return (
    <div id="mySidenav" className="sidenav bg-light shadow">
      <nav className="navbar d-flex align-items-center navbar-expand-lg navbar-light bg-light m-0">
        <div className="d-flex justify-content-end w-100">
          <button onClick={() => sidebarToggler()} className="btn">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </nav>
      <div className="d-flex justify-content-center text-center flex-column">
          <img className="w-50 mx-auto" src={User} />
          Anurag Gharat
      </div>
      <ul className="list-group p-0 list-group-flush mt-0">
        <li className="list-group-item bg-light border-0">Options</li>
        <li className="list-group-item  bg-light border-0">A second item</li>
        <li className="list-group-item bg-light  border-0">A third item</li>
        <li className="list-group-item bg-light border-0">A fourth item</li>
        <li className="list-group-item bg-light border-0">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Dashboard View</option>
            <option className="1">One</option>
            <option className="2">Two</option>
            <option className="3">Three</option>
          </select>
        </li>
      </ul>
    </div>
  );
}
