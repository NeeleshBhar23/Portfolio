import React from "react";
import { Outlet } from "react-router-dom";
import './App.css'
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar";


const App=() => {
  

  return (
    <>
     <Sidebar/>
     <div className="main-content">
         <Navbar></Navbar>
         <section style ={{scrollBehavior: "smooth"}}>
          <Outlet></Outlet>
         </section>
     </div>
    </>
  )
}

export default App
