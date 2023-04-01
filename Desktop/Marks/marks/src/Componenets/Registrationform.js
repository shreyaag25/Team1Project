import React from 'react'

 import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import  { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Registrationform() {
  
  const form = useRef();
   const navigate=useNavigate()
  const [res,setRes] = useState(null);
  
  console.log(res);
  // validateEmail = () => {
  //   const email = this.refs.email.value;

  //   if(email.includes('@gmail.com')){
  //     document.getElementById("email").style.border = "2px solid green";
  //     document.getElementById("erroremail").style.color = "green";
  //     document.getElementById("erroremail").innerHTML="Email is of required format";
  //     return true;
  //   } else {
  //     document.getElementById("email").style.border = "2px solid red";
  //     document.getElementById("erroremail").style.color = "red";
  //     document.getElementById("email").value="";
  //     document.getElementById("erroremail").innerHTML="The email should be of the form example@gmail.com";
  //     return false;
  //   }}

  //Mongodb------
 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    let pa=data.get('pass');
    // let em=data.get('email');
    // let k;
    // if(em.includes('@gmail.com')){
    //   k="True";
    // }
    // else{
    //   k="False";
    // }
    let patt = new RegExp("[0-9]");
    let result = patt.test(pa);
    let pa1 = data.get('userid');
    axios.post("http://localhost:1111/re",{
     
    userid : data.get('userid'),

  }).then((response) => {
    console.log(response.data);
   if (response.data === "True") {
      document.getElementById("ii").style.border = "2px solid red";
      document.getElementById("errorid").style.color = "red";
      document.getElementById("errorid").innerHTML = "This Id number is already taken";
      document.getElementById("ii").value = "";
    }
  
   else if (pa1.length !== 10) {
    document.getElementById("ii").style.border = "2px solid red";
    document.getElementById("errorid").style.color = "red";
    document.getElementById("errorid").innerHTML = "The id number should be of length 10";
    document.getElementById("ii").value = "";
   }
  
   axios.post("http://localhost:1111/r",{
     
   email : data.get('email'),

 }).then((response) => {
  console.log(response.data);
  if (response.data === "True") {
     document.getElementById("ema").style.border = "2px solid red";
     document.getElementById("erroremail").style.color = "red";
     document.getElementById("erroremail").innerHTML = "This email is already taken";
     document.getElementById("ema").value = "";
   }
 
  //  else if(k==="False"){
  //   document.getElementById("ema").style.border = "2px solid red";
  //   document.getElementById("erroremail").style.color = "red";
  //    document.getElementById("ema").value="";
  //   document.getElementById("erroremail").innerHTML="The email should be of the form example@gmail.com";

  //  }
   else if(result===false || pa.length<5 || pa.length>20){
        document.getElementById("bd").style.border = "2px solid red";
         document.getElementById("errorpassword").style.color = "red";
        var errorpassword1= "Password Must Contain atleast 1 digit and should be of length 5 to 20 ";
        document.getElementById("bd").value="";
        document.getElementById("errorpassword").innerHTML=errorpassword1;
    }
  
    
   else{
    axios.post("http://localhost:1111/register",{
      name : data.get('name'),
      userid : data.get('userid'),
      pass : data.get('pass'),
      inlineRadioOptions: data.get('inlineRadioOptions'),
      email:data.get('email'),
      study:data.get('study'),
      branch:data.get('branch'),
      mand:data.get('mand'),
      admin:'False'

    }).then((response) => {
      console.log(response.data);
      setRes(response.data);
      emailjs.sendForm(
        "service_nsjmlm9",
        "template_5xh67by",
        form.current,
        "tdcsrPVxRWEBjvfoA"
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
      
      navigate('/');
      
    }).catch((error) => {
        console.log(error);
    })
  }
  }).catch((error) => {
      console.log(error);
  })
  }).catch((error) => {
  console.log(error);
  })
  

   
    //email sending
    // emailjs.sendForm(
    //   "service_nsjmlm9",
    //   "template_5xh67by",
    //   form.current,
    //   "tdcsrPVxRWEBjvfoA"
    // )
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //     console.log("message sent");
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    

  }
  
  
  
  return (
    <>
   <center><h1 className='hoo'>Grade Check</h1></center> 
  <section className="gradient-custom">
  <div className="container ">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" >
       
          <div className="card-body ">
          <center  ><h2 className='hoo'>Registration Form</h2></center>
          <br/>
            <form ref={form} onSubmit={handleSubmit}  >

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" name="name" className="form-control form-control-lg" placeholder=' Name' required/>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="number" id="ii" name="userid" className="form-control form-control-lg" placeholder='Id Number' required/>
                    <p id="errorid"></p>
                  
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="password" className="form-control form-control-lg" name="pass" id="bd" placeholder='Password' required/>
                    
                    <p id="errorpassword"></p>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" required/>
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="ema" name="email" className="form-control form-control-lg" placeholder='Email' required />
                    <p id="erroremail"></p>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <select className="select form-control-lg" placeholder="select" name="study" required>
                    <option value="1"  disabled>Select year of study</option>
                    <option value="2">1st year</option>
                    <option value="3">2nd year</option>
                    <option value="4">3rd year</option>
                    <option value="4">4th year</option>
                  </select>
                 
                  </div>
                  (select your year of study)
                </div>
              </div>

              <div className="row">
              <div className="col-md-6 mb-4 pb-2">

<div className="form-outline">
<select className="select form-control-lg" name="branch" required>
                    <option value="1"  disabled>Select Branch</option>
                    <option value="2">CSE</option>
                    <option value="3">CSE(Honors)</option>
                    <option value="4">EEE</option>
                    <option value="5">ECE</option>
                    <option value="6">Mechanical</option>
                    <option value="7">BBA</option>
                  </select>
                 ( Branch)
  
</div>

</div>
<div className="col-md-6 mb-4 pb-2">

<div className="form-outline">
<input  type="text" className="form-control form-control-lg stu" name="mand" value="Student" readonly/>
</div>

              </div>
              </div>

              <div>
              {/* onClick={()=>navigate('regis')} */}
              <input type="submit" className="form-control form-control-lg reg" value="Register"/>
                
              </div>
          
            </form>
            <div>
             <center><h6>Already have an account?<a href="/">Sign in</a></h6></center>   
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
