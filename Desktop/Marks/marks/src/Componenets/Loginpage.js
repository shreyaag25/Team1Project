import React from 'react'
import { useNavigate } from 'react-router-dom'

// import { useState } from 'react';
 import axios from 'axios';


export default function Loginpage({store}) {
 
     const navigate=useNavigate()
     let ids,l;
     
    
     //const [res,setRes] = useState('');
    //  const [formData, setFormData] = useState({
    //     userid: '',
    //     pass: ''
    //   });
    //const [formData, setFormData] = useState(null);
     //let re=" ";
     const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        ids=data.get('userid')
        
        console.log(ids,"pove")
        //  setFormData({
        //     userid: data.get('userid'),
        //     pass: data.get('pass')
        //   });
          console.log(data.get('userid'))
        axios.post("http://localhost:1111/data",{
            userid: data.get('userid'),
            pass: data.get('pass'),
            admin:data.get('admin')
            
          }).then((result)=>{
             console.log(result.data);
             //setRes(result.data);
             //console.log(res);
             if(result.data==="True" ){
                    store.dispatch({type:"login",data:{id:ids}})
                    // console.log('Hai');
                    
                   
                    navigate('Home')          
             }
             else if(result.data==="Tr"){
              store.dispatch({type:"login",data:{id:ids}})
              navigate('regis')
             }
             else{
                 document.getElementById("piggy").innerHTML="Invalid Credentials!";
             }

         }).catch((error)=>{
             console.log(error);
         })    
       }
       // set up text to print, each item in array is new line

     
  return (
    <>
    
   
   
{/* <section class=""> */}
 
  {/* <div class="py-4 text-center text-lg-start" >
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 split left">
          <h1 class="my-1 display-3 k">
           <center className="hoo"> Grade Check</center>
            {/* <span class="text-primary">for your business</span> */}
          {/* </h1>
          <br/> */}
          {/* <div className='css-typing'>
          <p class="my-2">
 Grade Check  is  a  marks management  system , that typically 
</p>
<p>
 consists of two roles - the faculty and the student.The faculty role
</p>


<p>
 involves entering the marks for various assessments and assigning 
</p>
<p>grades. The student role involves logging into the system and  </p>
<p>
checking their marks for various assessments, assignments,and exams.
</p>
<p> The system also allows students to track their progress over time</p>
<p>and identify areas where they need to improve.It provides real-time  </p>
<p>access to marks and grades, reducing the time and effort required</p>

<p>  for manual record-keeping. Additionally, the system ensures the</p> <p>accuracy and security of data, preventing unauthorized access and  </p><p> tampering of marks.</p><p></p>

    </div>
        </div> */}
        {/* </div> */}
{/* <div className="spi"> */}

        <h1 class="my-2 display-3 k">
           <center className="hoo"> Grade Check</center>
            {/* <span class="text-primary">for your business</span> */}
           </h1>
           
           <h3 id="piggy" className="hoo spl"><center> </center> </h3>
           
        <div className="form-bg ">
        
    <div className="container">
   
        <div className="row sp ">
            
                <div className="form-container">
                    <h3 className="title">My Account</h3>
                    <form className="form-horizontal"  onSubmit={handleSubmit}>
                    
                        
                        <div className="form-icon">
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i class="fa fa-user"></i></span>
                            <input type="number" className="form-control" name="userid" placeholder="Username(Id Number)"/>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                            <input type="password" name="pass" className="form-control" placeholder="Password"/>
                            <h4>   
                          {/* <div>
                        
                         <input type="radio" id="contactChoice1" name="contact" value="email" />
                         <label for="contactChoice1"><center><h5> You are :</h5> </center>  <h6> Faculty  </h6></label>
                         
                        <input type="radio" id="co        " name="contact" value="phone" />
                        <label for="contactChoice2"><h6>Student</h6></label>
                        </div> */}
                        <div>              
                        </div>
                        
                            
                            {/* <select> 
                            <option value="GFG">Select</option>
                            <option value="GFG">Faculty</option> 
                            <option value="OS">Student</option> 
                            </select>  */}
                            </h4>
                        </div>
                        <input type="submit" className="form-control form-control-lg log" value="Login"/>
                        {/* <button onClick={()=>navigate('Home')} className="btn signin">Login</button> */}
                        <div>
                        <h6>Do not have an account?<a href="register">Sign up</a></h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* </div>
      </div> */}
    {/* </div> */}
  {/* </div> */}
 
{/* </section> */}

    </>
  )
}
