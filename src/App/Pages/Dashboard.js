import React,{useState} from 'react'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {logoutUser} from '../Redux/Actions/auth'
import { connect } from "react-redux";
import { Redirect } from 'react-router'


function Dashboard({ logoutUser, user, isLoggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  console.log(user)

  //function to toggle sidebar

  const toggleSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar);
      // document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.marginLeft = "-250px";
    } else {
      setSidebar(!sidebar);
      //            document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.marginLeft = "0px";
    }
  };

  //fetch call for revenue and profile

  //post call for updating profile

  if(!isLoggedIn){
    console.log(isLoggedIn)
    return <Redirect to="/" />
  }

  return (
    <>
      <Sidebar sidebarToggler={toggleSidebar} logoutUser={logoutUser} />

      <div id="main" className="bg-background min-vh-100 p-0">
        <Navbar sidebarToggler={toggleSidebar} />
        <div className="container min-vh-100">
          <Main />
        </div>
        <footer className="w-100 bg-dark text-white text-center py-2">
          &copy;2021 Team 7
        </footer>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);