import React,{useState} from 'react'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function Dashboard() {


    const [sidebar, setSidebar] = useState(false)



    //function to toggle sidebar

    const toggleSidebar=()=>{
        if (sidebar){
            setSidebar(!sidebar)
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        else {
            setSidebar(!sidebar);
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    }
    


    return (
      <>
        <Sidebar />

        <div id="main" className="bg-white min-vh-100 p-0">
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
