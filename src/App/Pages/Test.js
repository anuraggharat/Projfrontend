import React, { useState } from "react";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const profile = [0, 1, 2, 3];

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

  return (
    <>
      <Sidebar sidebarToggler={toggleSidebar} />

      <div id="main" className="bg-background min-vh-100 p-0">
        <Navbar sidebarToggler={toggleSidebar} />
        <div className="container min-vh-100">
          <Main profile={profile} />
        </div>
        <footer className="w-100 bg-dark text-white text-center py-2">
          &copy;2021 Team 7
        </footer>
      </div>
    </>
  );
}
