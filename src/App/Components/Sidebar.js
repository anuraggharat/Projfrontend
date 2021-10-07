import React from 'react'

export default function Sidebar(props) {
  const onProfileChange = (e) =>{
    if(e.target.value=="1"){
        props.onChange([3,2,1,0]);
    }
    else if(e.target.value=="2"){
        props.onChange([1,3,2,0]);
    }
    else if(e.target.value=="3"){
        props.onChange([1,0,3,2]);
    }
  }
    
    return (
      <div id="mySidenav" className="sidenav bg-light shadow">
        <nav className="navbar d-flex align-items-center navbar-expand-lg navbar-light bg-light m-0">
          <div className="navbar-nav bg-light mx-auto my-auto">
            <button className="btn btn-outline-primary">
              <i className="bi bi-person-circle mx-2"></i>
              Anurag Gharat
            </button>
          </div>
        </nav>
        <ul className="list-group p-0 list-group-flush mt-0">
          <li className="list-group-item bg-light border-0">Options</li>
          <li className="list-group-item  bg-light border-0">A second item</li>
          <li className="list-group-item bg-light  border-0">A third item</li>
          <li className="list-group-item bg-light border-0">A fourth item</li>
          <li className="list-group-item bg-light border-0">
            <select className="form-select" aria-label="Default select example" onChange={onProfileChange} >
              <option defaultValue >Dashboard View</option>
              <option className="1" value="1" >One</option>
              <option className="2" Value="2" >Two</option>
              <option className="3" value="3" >Three</option>
            </select>
          </li>
        </ul>
      </div>
    );
}
