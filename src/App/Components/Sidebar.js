import React,{useState} from 'react'
import User from '../Assets/user.png'

export default function Sidebar({
  sidebarToggler,
  logoutUser,
  user,
  shownews,
  setShownews,
  setshowFaqs,
  showfaqs,
}) {
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
        {user.email}
      </div>
      <ul className="list-group p-0 list-group-flush mt-0">
        <li className="list-group-item bg-light border-0 mb-2 mt-3 border-bottom">
          Options
        </li>
        <li className="list-group-item  bg-light border-0 m-0 py-0">
          <div className="d-flex justify-content-between align-content-center m-0 py-0">
            <div>
              <p>Show News</p>
            </div>
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
        </li>
        <li className="list-group-item  bg-light border-0 m-0 py-0">
          <div className="d-flex justify-content-between align-content-center my-0 py-0">
            <div>
              <p>Show FAQ's</p>
            </div>
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
        </li>

        <li className="list-group-item bg-light border-0 w-100 px-3 ">
          <button
            className="btn btn-primary btn-block w-100 m-0"
            onClick={() => logoutUser()}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

