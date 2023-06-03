import React from 'react'
 import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
 import axios from 'axios';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { useSelector } from 'react-redux';
//  import emailjs from "@emailjs/browser";
// import  { useRef } from "react";

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Announcements() {
    const navigate=useNavigate()
  const [res,setRes] = useState(null);
 
axios.post("http://localhost:1111/stuAnno",{
     params:{}
}).then((response) => {
      console.log(response.data);
      setRes(response.data);
    }).catch((error) => {
        console.log(error);
    })



if(res==null){
    return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top ">
  
  <div className="container-fluid">
  <div>
  <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
   
  <a id="demo" href="Home" >Grade Check</a>
  </div>
    <div className=" offcanvas  text-bg-dark  offcanvas-start " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
   
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dash Board</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="regis">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active my-3" aria-current="page" href="profilestu">Profile   <i class="bi bi-person-circle"></i></a>
           
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Student
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="add">Add Student</a></li>
              <li><a className="dropdown-item" href="manage">Manage Students</a></li>
              
            </ul>
          </li> */}
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Subject
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="cs">Create Subject</a></li>
              <li><a className="dropdown-item" href="ms">Manage Subjects</a></li>
    
            </ul>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Results
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              {/* <li><a className="dropdown-item" href="adr">Add Result</a></li> */}
              <li><a className="dropdown-item" href="intstu">Internals</a></li>
              <li><a className="dropdown-item" href="extstu">Externals</a></li>
              {/* <li><a className="dropdown-item" href="mnr">Manage Results</a></li> */}
            </ul>
          </li>
          
           
            <a className="dropdown-item" href="resanal">Complete result analysis</a>
            <br/>
          <a className="dropdown-item" href="reqstu">Requests or queries</a>
            
            
          <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="recreq">Announcements</a>
             </li>
        </ul>
        
        
      </div>
      <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
    </div>
   
  </div>
  
</nav>
<center><h1 className='ho1 hoo'>Announcements</h1></center>
</>
)
}
 else{
  return (
    
    
    <>
       <nav className="navbar navbar-dark bg-dark fixed-top ">
     
     <div className="container-fluid">
     <div>
     <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
         <span className="navbar-toggler-icon"></span>
       </button>
      
     <a id="demo" href="Home" >Grade Check</a>
     </div>
       <div className=" offcanvas  text-bg-dark  offcanvas-start " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      
         <div className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dash Board</h5>
           <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
             <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="regis">Home</a>
             </li>
             <li className="nav-item">
               <a className="nav-link active my-3" aria-current="page" href="profilestu">Profile   <i class="bi bi-person-circle"></i></a>
              
             </li>
             {/* <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Student
               </a>
               <ul className="dropdown-menu dropdown-menu-dark">
                 <li><a className="dropdown-item" href="add">Add Student</a></li>
                 <li><a className="dropdown-item" href="manage">Manage Students</a></li>
                 
               </ul>
             </li> */}
             {/* <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Subject
               </a>
               <ul className="dropdown-menu dropdown-menu-dark">
                 <li><a className="dropdown-item" href="cs">Create Subject</a></li>
                 <li><a className="dropdown-item" href="ms">Manage Subjects</a></li>
       
               </ul>
             </li> */}
             <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Results
               </a>
               <ul className="dropdown-menu dropdown-menu-dark">
                 {/* <li><a className="dropdown-item" href="adr">Add Result</a></li> */}
                 <li><a className="dropdown-item" href="intstu">Internals</a></li>
                 <li><a className="dropdown-item" href="extstu">Externals</a></li>
                 {/* <li><a className="dropdown-item" href="mnr">Manage Results</a></li> */}
               </ul>
             </li>
             
              
               <a className="dropdown-item" href="resanal">Complete result analysis</a>
               <br/>
             <a className="dropdown-item" href="reqstu">Requests or queries</a>
               
               
             <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="recreq">Announcements</a>
                </li>
           </ul>
           
           
         </div>
         <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
       </div>
      
     </div>
     
   </nav>
   <center><h1 className='ho1 hoo'>Announcements</h1></center>

    <br/> <br/>
    
    {res.map((obj)=>(
     <div class="alert alert-success stuan" role="alert">
     {obj.announcement}<br/>
   </div>
    ))}
    
    
 </>
  );
    }
}
