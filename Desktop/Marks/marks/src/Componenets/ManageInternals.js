import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
 import axios from 'axios';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from 'react';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';
export default function ManageInternals() {
  const navigate=useNavigate()
  const [res,setRes] = useState(null);
  const id = useSelector(state => state.login[0]);
   function deleteProduct(userid){
    axios.delete(`http://localhost:1111/dele/${userid}`,{params:{}})
     .then((result)=>{
       console.log(result.data);
      //  handleSubmit(); 
      
     }).catch((error)=>{
       console.log(error);
     })
   }
    // const handleSubmit = () => {
     
     useEffect(() => {
      axios.get("http://localhost:1111/int", {
          params: {
            id: id
          }
        })
        .then((result) => {
          setRes(result.data);
           
           console.log("result",result.data);
        })
        .catch((error) => {
          console.log(error);
        }); 
    }, [id]);
    //  var br;
    //  console.log(res);
      // }
     if( res == null ){
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
                <br/><br/>
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
              Results
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="adr">Add Internals</a></li>
              <li><a className="dropdown-item" href="ext">Add Externals</a></li>
              <li><a className="dropdown-item" href="mnr">Manage Externals</a></li>
              <li><a className="dropdown-item" href="int">Manage Internals</a></li>
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
      <div className="tab">
       {/* <center> <h1 className='ho'>This is the Manage Student Page</h1><h2>Under Construction  &#128531;!!</h2></center> */}
       {/* <button onClick={handleSubmit}>Get Student Data</button>
      
         <table>
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
               </table>   */}
      
       </div>
       {/* <div className="App">
          <button onClick={handleSubmit}>GetStudentData</button>
          </div> */}
           <center><h1 className='ho1 hoo'>Manage Internals</h1></center> 
       </>
        
      
          
        );
     }else{
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
              <li><a className="dropdown-item" href="ext">Add Externals</a></li>
              <li><a className="dropdown-item" href="mnr">Manage Externals</a></li>
              <li><a className="dropdown-item" href="int">Manage Internals</a></li>
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
      <center><h1 className='ho1 hoo'>Manage Internals</h1></center>
      {/* <div className="tab"> */}
       {/* <center> <h1 className='ho'>This is the Manage Student Page</h1><h2>Under Construction  &#128531;!!</h2></center> */}
       {/* <button onClick={handleSubmit}>Get Student Data</button>
      
         <table>
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
               </table>   */}
      
       {/* </div> */}
       
       <div className="tab">
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
   
    <div class="varshi">
	
	<div className="table4">
		<div className="table-header4">
			<div className="header__item4">User id</div>
			
			<div className="header__item4">Subject</div>
      
      <div className="header__item4 ">  Homeassignment </div>
      <div className="header__item4 ">Alm</div>
      <div className="header__item4 ">MoocsReview</div>
      <div className="header__item4">Lab Marks</div>
      <div className="header__item4">Tutorial</div>
      <div className="header__item4">Total</div>
      {/* <div className="header__item4">Update</div> */}
      <div className="header__item4">Delete</div>
			{/* <div className="header__item">Email</div>
			<div className="header__item">Year Of Study</div> */}
			{/* <div className="header__item">Branch</div> */}
      
		</div>
		<div className="table-content">	
				
       {res.map((obj)=>(
            <div className="table-row4">
            <div className="table-data4 ">{obj.userid}</div>
            <div className="table-data4 ">{obj.sub}</div>
            {/* <div className="table-data1 hp"></div> */}
            <div className="table-data4 ">{obj.Homeassignment}</div>
            <br/>
            <div className="table-data4 ">{obj.Alm}</div>
            <div className="table-data4 ">{obj.MoocsReview}</div>
            <div className="table-data4 ">{obj.LabMarks}</div>
            <div className="table-data4 ">{obj.Tutorial}</div>
            <div className="table-data4 ">{obj.total}</div>
             {/* <div className="table-data">{obj.branch}</div> */}
             {/* <div className="table-data1"><button >Update</button></div> */}
            <div className="table-data4 "><button className='manex'  onClick={() => deleteProduct(obj.userid)}>Delete</button></div>
            </div>
          ))}
				
		
			
		</div>	
	</div>
</div>
 </div>
 
          </>
       );
       
      }
      
    }