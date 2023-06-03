import React from 'react'
import { useNavigate } from 'react-router-dom'
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { useState } from 'react';
import axios from 'axios';
export default function Navbar() {
  const navigate=useNavigate()
  //  const [res,setRes] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post("http://localhost:1111/queries",{
      group : data.get('group'),
      parent : data.get('parent'),
      query : data.get('qu')
    }).then((response) => {
      console.log(response.data);
      //  setRes(response.data);
    }).catch((error) => {
        console.log(error);
    })
  }
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
                  <a className="nav-link active" aria-current="page" href="stano">Announcements</a>
                </li>
        </ul>
        
        
      </div>
      <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
    </div>
   
  </div>
  
</nav>
<br/><br/><br/><br/>
<div className="request">
<center><h1 className='hoo'>Send Requests/Queries</h1></center>
<center>
<form className='fore' onSubmit={handleSubmit}>
 <br/>
  <h3>Group Name</h3>
 <div className="col-md-6 mb-4 pb-2">

<div className="frer">
<select className="frer1" placeholder="select" name="group" required>
  <option value="1"  disabled>Select</option>
  <option value="Exam Section"><center>Exam Section</center></option>
  
</select>

</div>

</div>

<br/>
  <h3>Issue Type</h3>
 <div className="col-md-6 mb-4 pb-2">

<div className="frer">
<select className="frer1" placeholder="select" name="parent" required>
  <option value="1"  disabled>Select</option>
  <option value="Deviation in marks"><center>Deviation in marks</center></option>
  <option value="Result Not Found"><center>Result Not Found</center></option>
  <option value="Re-Evaluation"><center>Re-Evaluation</center></option>
    <option value="Re-Verification"><center>Re-Verification</center></option>
</select>

</div>

</div>
<br/>
  <h3>Course</h3>
 <div className="col-md-6 mb-4 pb-2">

<div className="frer">
<select className="frer1" placeholder="select" name="parent" required>
  <option value="1"  disabled>Select</option>
  <option value="MERN STACK WEB DEVELOPMENT"><center>MERN STACK WEB DEVELOPMENT</center></option>
  <option value="DESIGN & ANALYSIS OF ALGORITHMS"><center>DESIGN & ANALYSIS OF ALGORITHMS</center></option>
  <option value="AUTOMATA THEORY & FORMAL LANGUAGES"><center>AUTOMATA THEORY & FORMAL LANGUAGES</center></option>
    <option value="COMPUTER NETWORKS & SECURITY">COMPUTER NETWORKS & SECURITY<center></center></option>
    <option value="MATHEMATICAL PROGRAMMING">MATHEMATICAL PROGRAMMING<center></center></option>
</select>

</div>

</div>
<br/>
<br/>
  <h3>Faculty Id</h3>
 <div className="col-md-6 mb-4 pb-2">

<div className="frer">
<select className="frer1" placeholder="select" name="parent" required>
  <option value="1"  disabled>Select</option>
  <option value="1602-MERN STACK WEB DEVELOPMENT"><center>1602-MERN STACK WEB DEVELOPMENT</center></option>
  <option value="2100030055-DESIGN & ANALYSIS OF ALGORITHMS"><center>2100030055-DESIGN & ANALYSIS OF ALGORITHMS</center></option>
  <option value="5462-AUTOMATA THEORY & FORMAL LANGUAGES"><center>5462-AUTOMATA THEORY & FORMAL LANGUAGES</center></option>
    <option value="9090-COMPUTER NETWORKS & SECURITY">9090-COMPUTER NETWORKS & SECURITY<center></center></option>
    <option value="2223-MATHEMATICAL PROGRAMMING">2223-MATHEMATICAL PROGRAMMING<center></center></option>
</select>

</div>

</div>
<br/>
<p>Issue:(Mention Room number if it is related to P&D or HOSTEL(without roomno problem will not be solved))</p>
<br/>
<h3>Mention Your Query</h3>
<input className="tr" name="qu" type="text-area"/>
<br/><br/><br/><br/>
<input type="submit"  class="request12" value="Submit"/>
</form>

</center>

</div>          


 </>
  )
}
