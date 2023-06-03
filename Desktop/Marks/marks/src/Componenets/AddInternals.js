import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
 import axios from 'axios';
 import { useEffect } from 'react';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';
import emailjs from "@emailjs/browser";
import  { useRef } from "react";

export default function Addresult() {
  const navigate=useNavigate()
  const [res,setRes] = useState(null);
  const form = useRef();
  const id = useSelector(state => state.login[0]);
  //  function deleteProduct(userid){
  //   axios.delete(`http://localhost:1111/delete/${userid}`,{params:{}})
  //    .then((result)=>{
  //      console.log(result.data);
  //     //  handleSubmit(); 
      
  //    }).catch((error)=>{
  //      console.log(error);
  //    })
  //  }
    // const handleSubmit = () => {
      // let i=1;
     var re=0;
      useEffect(() => {
        axios.get("http://localhost:1111/adr", {
            params: {
              id: id
            }
          })
          .then((result) => {
            setRes(result.data);
             
              // console.log("result",result.data.length,result.data);
              
          })
          .catch((error) => {
            console.log(error);
          }); 
      }, [id]);
    //  var br;

  // console.log(re);

       
      // }
      
      const handleSubmit = (event, userid,r) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
         
    axios.post("http://localhost:1111/chi",{
     
    userid : userid,
    sub:r
  }).then((response) => {
    console.log(response.data);
   if (response.data === "True") {
       document.getElementById(userid+"H").style.border = "2px solid red";
       document.getElementById(userid+"A").style.border = "2px solid red";
       document.getElementById(userid+"M").style.border = "2px solid red";
       document.getElementById(userid+"L").style.border = "2px solid red";
       document.getElementById(userid+"T").style.border = "2px solid red";
       document.getElementById("errorid").style.color = "red";
       document.getElementById("errorid").innerHTML = "Internals Already Given For This Student";
       document.getElementById(userid+"H").value = "";
       document.getElementById(userid+"A").value = "";
       document.getElementById(userid+"M").value = "";
       document.getElementById(userid+"L").value = "";
       document.getElementById(userid+"T").value="";
    }
    else{
      // console.log(email)
        axios.post("http://localhost:1111/posy",{
          userid:userid,
          sub:r,
          Homeassignment: data.get('H'),
          Alm: data.get('A'),
          MoocsReview: data.get('M'),
          LabMarks:data.get('L'),
          Tutorial:data.get('T'),
          total:parseInt(data.get('H'))+parseInt(data.get('A'))+parseInt(data.get('M'))+parseInt(data.get('L'))+parseInt(data.get('T')),
        }).then((response) => {
          console.log(response.data);
          emailjs.sendForm(
            "service_nsjmlm9",
           "template_8h9zznb",
           form.current,
            "tdcsrPVxRWEBjvfoA",
          )
          .then(
          (result) => {
             console.log(result.text);
             console.log("message sent");
           },
           (error) => {
              console.log(error.text);
           }
          );
          document.getElementById(userid+"H").style.border = "2px solid green";
          document.getElementById(userid+"A").style.border = "2px solid green";
          document.getElementById(userid+"M").style.border = "2px solid green";
          document.getElementById(userid+"L").style.border = "2px solid green";
          document.getElementById(userid+"T").style.border = "2px solid green";
          document.getElementById("errorid").style.color = "green";
          document.getElementById("errorid").innerHTML = "Internals Succsfully Added";
          
        }).catch((error) => {
            console.log(error);
        })
    }
    }).catch((error) => {
      console.log(error);
      })
    }
    
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
           <center><h1 className='ho1 hoo'>Add Internals</h1></center> 
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
      <center><h1 className='ho1 hoo'>Add Internals</h1></center>
      <h1><center><div id="errorid"> </div></center></h1>
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
	 
	<div className="table">
		<div className="table-header1">
			<div className="header__item1">Userid</div>
			<div className="header__item1">Subject</div>
      
      <div className="header__item1 ">  Homeassignment(HA) </div>
      <div className="header__item1 hty">Alm</div>
      <div className="header__item1 hty">Moocs Review</div>
      <div className="header__item1">Lab Marks</div>
      <div className="header__item1">Tutorial</div>
			{/* <div className="header__item">Email</div> */}
			{/* <div className="header__item">Year Of Study</div> */}
			{/* <div className="header__item">Branch</div> */}
       <div className="header__item1">Add</div> 
       
      {/* <div className="header__item">Delete</div> */}
		</div>
    {res.slice(0, -2).map((obj)=>(
      re=re+1
    ))}
		<div className="table-content">	
    
      {res.slice(0, -2).map((obj)=>(
           
            <div className="table-row1">
            <div className="table-data1">{obj.userid}</div>
            <div className="table-data1 ">{res[re]}</div>
            <form  ref={form} onSubmit={(event) => handleSubmit(event, obj.userid,res[re])}>
            <div className='smalver' ><input className='email23'  type="email"  name="email" value={obj.email}/>
          <input className='email23'  type="text"  name="sub" value={res[re]}/></div>
            <div className="formtab">
            <div className="table-data1 f1"> <input  id={obj.userid + "H"}  name="H" type="number" max="15" min="1" required /></div>
            <div className="table-data1 f1"><input id={obj.userid + "A"}   name="A"  type="number" max="10" min="1" required /></div>
            <div className="table-data1 f1"> <input id={obj.userid + "M"}  name="M"  type="number" max="15" min="1" required /></div>
            <div className="table-data1 f1"><input id={obj.userid + "L"}   name="L"  type="number" max="10" min="1" required /></div>
            <div className="table-data1 f1"><input id={obj.userid + "T"}  name="T"  type="number" max="10" min="1" required /></div>
            <button type="submit" >Add</button>
            </div>
            </form>
            {/* <div className="table-data"><button onClick={() => handleSubmit()}>Add</button></div>  */}
            
             </div>))}
              
				{/* {res[4]} */}
		{/* <div className="table-data hp">{obj.email}</div> */}
            {/* <div className="table-data">{obj.study}</div> */}
             {/* <div className="table-data">{obj.branch}</div> */}
             {/* <div className="table-data"><button >Update</button></div> */}
            {/* <div className="table-data"><button onClick={() => deleteProduct(obj.userid)}>Delete</button></div> */}
			
		</div>
    
	</div>
 
</div>
 </div>
 
          </>
       );
       
      }
      
    }
  