import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
 import axios from 'axios';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';

// import "bootstrap-icons/font/bootstrap-icons.css";
export default function ResultAnalysis() {
  const navigate=useNavigate()
  const [res,setRes] = useState(null);
  const [res1,setRes1]=useState(null);
  const id = useSelector(state => state.login[0]);
  useEffect(() => {
    axios.get("http://localhost:1111/reual", {
        params: {
          id: id
        }
      })
      .then((response) => {
        setRes(response.data[0]);
        setRes1(response.data[1]);
        console.log("result", response.data[0], response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      }); 
  }, [id]);

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
                  <a className="nav-link active" aria-current="page" href="stano">Announcements</a>
                </li>
           
           </ul>
           
           
         </div>
         <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
       </div>
      
     </div>
     
   </nav>
   <center><h1 className='ho1 hoo'>Result</h1></center> 
 </>
  );}
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
                  <a className="nav-link active" aria-current="page" href="stano">Announcements</a>
                </li>
             
             </ul>
             
             
           </div>
           <button type="button" className="btn btn-danger" onClick={()=>navigate('/')}>Logout</button>
         </div>
        
       </div>
       
     </nav>
     <center><h1 className='ho1 hoo'>Result</h1></center>
    
 {/* <center> <h1 className='ho'>This is the Manage Student Page</h1><h2>Under Construction  &#128531;!!</h2></center> */}
 
  {/* <table>
           <tr>
            <th>USERID</th>
             <th>NAME</th>
            <th>EMAIL</th>
            <th>Year Of Study</th>
           </tr>
           {res.map((obj)=>(
             <tr key={obj.userid}>
              <td>{obj.userid}</td>
               <td>{obj.name}</td>
              <td>{obj.email}</td>
              <td>{obj.study}</td>
               <td><button onClick={() => deleteProduct(obj.pid)}>Delete</button></td>
             </tr>
          ))}
         </table>  */}
   
      {/* <div className="header__item4">Update</div> */}
      {/* <div className="header__item4">Delete</div> */}
			{/* <div className="header__item">Email</div>
			<div className="header__item">Year Of Study</div> */}
			{/* <div className="header__item">Branch</div> */}
      
            <body>
 <div id="wrapper">

  
  <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th><span>University id</span></th>
        <th><span>Course</span></th>
        <th><span>Internals(60)</span></th>
        <th><span>Externals(40)</span></th>
        <th><span>Total(100)</span></th>
        <th><span>Grade</span></th>
        <th><span>Grade Point</span></th>
      </tr>
    </thead>
    <tbody>
    {/* {res.map((obj)=>(
      <tr>
        <td class="lalign">{obj.userid}</td>
        <td>{obj.sub}</td>
        <td>{obj.total}</td>
        {res1.map((obj1)=>(
        <td>{obj1.total}</td>
        
        ))}
        {res1.map((obj1)=>(
        <td>{parseInt(obj.total)+parseInt(obj1.total)}</td>
        
        ))}
         {res1.map((obj1)=>(
        parseInt(obj.total)+parseInt(obj1.total)>=90?<td>O</td>:( parseInt(obj.total)+parseInt(obj1.total)>=80 &&  parseInt(obj.total)+parseInt(obj1.total)<90)?<td>A+</td>:( parseInt(obj.total)+parseInt(obj1.total)>=70 &&  parseInt(obj.total)+parseInt(obj1.total)<80)?<td>A</td>:( parseInt(obj.total)+parseInt(obj1.total)>=60 &&  parseInt(obj.total)+parseInt(obj1.total)<70)?<td>B</td>:( parseInt(obj.total)+parseInt(obj1.total)>=50 &&  parseInt(obj.total)+parseInt(obj1.total)<60)?<td>B+</td>:( parseInt(obj.total)+parseInt(obj1.total)>=40 &&  parseInt(obj.total)+parseInt(obj1.total)<50)?<td>C</td>:( parseInt(obj.total)+parseInt(obj1.total)<40)?<td>FAIL</td>:<td></td>
        
        ))}
        {res1.map((obj1)=>(
        parseInt(obj.total)+parseInt(obj1.total)>=90?<td>10</td>:( parseInt(obj.total)+parseInt(obj1.total)>=80 &&  parseInt(obj.total)+parseInt(obj1.total)<90)?<td>9</td>:( parseInt(obj.total)+parseInt(obj1.total)>=70 &&  parseInt(obj.total)+parseInt(obj1.total)<80)?<td>8</td>:( parseInt(obj.total)+parseInt(obj1.total)>=60 &&  parseInt(obj.total)+parseInt(obj1.total)<70)?<td>7</td>:( parseInt(obj.total)+parseInt(obj1.total)>=50 &&  parseInt(obj.total)+parseInt(obj1.total)<60)?<td>6</td>:( parseInt(obj.total)+parseInt(obj1.total)>=40 &&  parseInt(obj.total)+parseInt(obj1.total)<50)?<td>5</td>:( parseInt(obj.total)+parseInt(obj1.total)<40)?<td>FAIL</td>:<td></td>
        
        ))} */}

      {/* </tr>
       ))} */}
      
  {res.map((obj) => (
    <tr className="restn">
      <td className="lalign">{obj.userid}</td>
      <td>{obj.sub}</td>
      <td>{obj.total}</td>
      {res1.map((obj1) => (
        obj1.userid === obj.userid &&
        obj1.sub === obj.sub &&
        <td>{obj1.total}</td>
      ))}
      {res1.map((obj1) => (
        obj1.userid === obj.userid &&
        obj1.sub === obj.sub &&
        <td>{parseInt(obj.total) + parseInt(obj1.total)}</td>
      ))}
      {res1.map((obj1) => (
        obj1.userid === obj.userid &&
        obj1.sub === obj.sub &&
        <td>
          {parseInt(obj.total) + parseInt(obj1.total) >= 90 ? (
            "O"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 80 &&
            parseInt(obj.total) + parseInt(obj1.total) < 90 ? (
            "A+"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 70 &&
            parseInt(obj.total) + parseInt(obj1.total) < 80 ? (
            "A"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 60 &&
            parseInt(obj.total) + parseInt(obj1.total) < 70 ? (
            "B"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 50 &&
            parseInt(obj.total) + parseInt(obj1.total) < 60 ? (
            "B+"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 40 &&
            parseInt(obj.total) + parseInt(obj1.total) < 50 ? (
            "C"
          ) : parseInt(obj.total) + parseInt(obj1.total) < 40 ? (
            "FAIL"
          ) : (
            ""
          )}
        </td>
      ))}
      {res1.map((obj1) => (
        obj1.userid === obj.userid &&
        obj1.sub === obj.sub &&
        <td>
          {parseInt(obj.total) + parseInt(obj1.total) >= 90 ? (
            "10"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 80 &&
            parseInt(obj.total) + parseInt(obj1.total) < 90 ? (
            "9"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 70 &&
            parseInt(obj.total) + parseInt(obj1.total) < 80 ? (
            "8"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 60 &&
            parseInt(obj.total) + parseInt(obj1.total) < 70 ? (
            "7"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 50 &&
            parseInt(obj.total) + parseInt(obj1.total) < 60 ? (
            "6"
          ) : parseInt(obj.total) + parseInt(obj1.total) >= 40 &&
            parseInt(obj.total) + parseInt(obj1.total) < 50 ? (
            "5"
          ) : parseInt(obj.total) + parseInt(obj1.total) < 40 ? (
            "FAIL"
          ) : (
            ""
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>

    
  </table>
 </div> 
</body>
		

 
     </>
  );
  }
}
