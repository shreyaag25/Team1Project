import React from 'react'
import { useNavigate } from 'react-router-dom'
// import ma from 'C:\Users\assr\Desktop\Marks\marks\public\ma.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";

// import ma from './assets/ma.jpg';
import uni2 from './assets/uni2.webp';
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

  
// import "bootstrap-icons/font/bootstrap-icons.css";
export default function Registerstu() {
  const navigate=useNavigate()
  const [res,setRes] = useState(0);
  // const navigate=useNavigate();
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

<div className="bat">
<br/>
   

   <img className="bg" src={uni2} alt="this is marks"></img>
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
           5
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           
          </Typography>
        </CardContent>

      </Box>
     
    </Card> 
    </div>
    </center>

 </div>
 <center><h1 className='ho1 hoo'>About</h1></center>
 <div className="marabdi">
 <ul className="marab">
  <p>
    <li>Grade check is a marks management system. </li>
    <li>That typically consists of two roles- the faculty and the student. </li>
    <li>The faculty role involves entering the marks for various assessments and assigning grades. </li>
    <li>The student role involves logging into the system and checking their marks for various assessments, assignments and exams.  </li>
    <li>The system also allows students to track their progress over time and identify areas where they need to improve.</li>
    <li>It provides real time access to marks and grades, reducing the time and effort for manual record-keeping.</li>
  <li>additionally, the system ensures accuracy and security of data, preventing unauthorised access and tampering of marks.</li>
  </p>
  </ul>
  </div>
 </>
  )
}
