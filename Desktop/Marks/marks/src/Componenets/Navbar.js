import React from 'react'
import { useNavigate } from 'react-router-dom'
// import ma from 'C:\Users\assr\Desktop\Marks\marks\public\ma.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";

import ma from './assets/ma.jpg';

// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import Face2Icon from '@mui/icons-material/Face2';
import { useState } from 'react';
 import axios from 'axios';
export default function Navbar() {
  const [res,setRes] = useState(0);
  const navigate=useNavigate();
  axios.get("http://localhost:1111/count",{
    params:{}
  }).then((result)=>{
      var p=result.data;
      setRes(p.length);
  }).catch((error)=>{
      console.log(error);
  })  
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
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Subject
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="cs">Add Subject</a></li>
              <li><a className="dropdown-item" href="ms">Manage Subjects</a></li>
    
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active my-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Results
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="adr">Add Result</a></li>
              <li><a className="dropdown-item" href="int">Internals</a></li>
              <li><a className="dropdown-item" href="ext">Externals</a></li>
              <li><a className="dropdown-item" href="mnr">Manage Results</a></li>
            </ul>
          </li>
        </ul>
        
        
      </div>
      <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
    </div>
   
  </div>
  
</nav>
<div className="bat">
  <center> <h1 >Welcome</h1></center> 
   <img className="bg" src={ma} alt="this is marks image"></img>
   <br/>
   <br/>
   <center>
  <div className="dis">
   <Card   >
      <Box className="c1" >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          <h6 class="hoo">Total Student Count</h6>
         
            <h2 class="text-right"> <span><i class="bi bi-person-video3"></i></span></h2>
           {res}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           
          </Typography>
        </CardContent>
       
      </Box>
     
    </Card> 
  {/* <h2>Under Construction &#128531;!!</h2> */}
  
  
  <Card   >
      <Box className="c2" >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          <h6 class="hoo">Total Admin Count</h6>
         
            <h2 class="text-right"> <span><i class="bi bi-person-workspace"></i></span></h2>
           1
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           
          </Typography>
        </CardContent>

      </Box>
     
    </Card> 
    </div>
    </center>
 </div>
 </>
  )
}
