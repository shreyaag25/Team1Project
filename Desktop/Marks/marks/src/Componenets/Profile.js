import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import o2 from './assets/o2.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import  Addresult from '../Componenets/Addresult'
// import Addresult from './Componenets/Addresult';
import o2 from './assets/o2.jpg';
export default function Profile() {

  // const id = useSelector(state => state.login[0]);
  const navigate=useNavigate();
  const id = useSelector(state => state.login[0]);
const [res, setRes] = useState('');

useEffect(() => {
  axios.get("http://localhost:1111/profile", {
      params: {
        id: id
      }
    })
    .then((result) => {
      setRes(result.data);
      
      // console.log("result",result.data);
    })
    .catch((error) => {
      console.log(error);
    }); 
}, [id]);

  

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
            <a className="nav-link active" aria-current="page" href="Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active my-3" aria-current="page" href="profile">Profile   <i class="bi bi-person-circle"></i></a>
           
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Student
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              {/* <li><a className="dropdown-item" href="add">Add Student</a></li> */}
              <li><a className="dropdown-item" href="manage">Manage Students</a></li>
              
            </ul>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Subject
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="cs">Add Subject</a></li>
              <li><a className="dropdown-item" href="ms">Manage Subjects</a></li>
    
            </ul>
          </li> */}
         <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Results
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="adr">Add Internals</a></li>
              <li><a className="dropdown-item" href="int">Add Externals</a></li>
              <li><a className="dropdown-item" href="ext">Manage Externals</a></li>
              <li><a className="dropdown-item" href="mnr">Manage Internals</a></li>
            </ul>
          </li>
          <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="recreq">Announcements</a>
                </li>
             
             
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="recreqqq">Received Requests</a>
                </li>
        </ul>
        
        
      </div>
      <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
    </div>
   
  </div>
  
</nav>
<div>
    <br/><br/><br/><br/>
    <div class="ScriptTop">
    <div class="rt-container">
        <div class="col-rt-4" id="float-right"> 
        </div>
    </div>
</div>

{/* profile */}
<section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              

<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
        
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src={o2} alt="student dp"/>
            
            <h2>{res[0]}</h2>
            
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1"><center><h3>Faculty ID:{id}</h3></center></strong></p>
            {/* <p class="mb-0"><strong class="pr-1">Class:</strong>4</p>
            <p class="mb-0"><strong class="pr-1">Section:</strong>A</p> */}
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0">General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%"><h3>Faculty Id</h3></th>
                <td width="2%">:</td>
                <td>{id}</td>
              </tr>
              <tr>
                <th width="30%"><h3>Name</h3></th>
                <td width="2%">:</td>
                <td>{res[0]}</td>
              </tr> 
              <tr>
                <th width="30%"><h3>Academic Year</h3>	</th>
                <td width="2%">:</td>
                <td>{res[1]}</td>
              </tr>
              <tr>
                <th width="30%"><h3>Gender</h3></th>
                <td width="2%">:</td>
                <td>{res[2]}</td>
              </tr>
               
              {/* <tr>
                <th width="30%">blood</th>
                <td width="2%">:</td>
                <td>B+</td>
              </tr> */}
            </table>
            
          </div>
        </div>
        </div>
      
      </div>
      
    </div>
   
  </div>
</div>
           
    		</div>
 </div>
        </section>
    <br/><br/>
    <div>
        <div class="card card-1 shadow-sm">
          <div class=" card-header-1 bg-transparent border-0">
            <br/>
            <h2 class="mb-0"><center>Subjects </center></h2>
          </div>
          <br/>
         <center> <h2 className='cou'>Present Subjects</h2></center>
         <br/>
         {/* <center> */}
          <div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Course</h6>
      <br/>
			<h5>{res[4]}</h5>
		</div>
		<div class="course-info">
			<div class="progress-container">
			</div>
      <div className="dt">
			<h4>Course-Code:{res[3]}</h4>
      <h4>Course-Name : {res[4]}</h4>
			<h4>Semester:{res[5]}</h4>
      </div>
		</div>
	</div>
</div>

<br/>
{/* </center> */}
<center> <h2 className='cou'>Previous Subjects</h2></center>
<br/>
<div className='groupd'>
<div class="courses-container">
	<div class="course">
		<div class="course-preview1">
			<h6>Course</h6>
      <br/>
			<h5>{res[6]}</h5>
		</div>
		<div class="course-info">
			<div class="progress-container">
			</div>
      <div className="dt">
			<h4>Course-Code:{res[8]}</h4>
      <h4>Course-Name : {res[6]}</h4>
			<h4>Semester:{res[7]}</h4>
      </div>
		</div>
	</div>
</div>
<br/>
<div class="courses-container">
	<div class="course">
		<div class="course-preview2">
			<h6>Course</h6>
      <br/>
			<h5>{res[9]}</h5>
		</div>
		<div class="course-info">
			<div class="progress-container">
			</div>
      <div className="dt">
			<h4>Course-Code:{res[11]}</h4>
      <h4>Course-Name : {res[9]}</h4>
			<h4>Semester:{res[10]}</h4>
      </div>
		</div>
	</div>
</div>


</div>
</div>
</div>    
</div>

 
 
 </>
     
  )
     }
      
