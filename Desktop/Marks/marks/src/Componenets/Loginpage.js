import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Loginpage() {
     const navigate=useNavigate()
  return (
    <>
    <center><b><h1 className="hoo">Grade Check</h1></b></center>
    
    <div className="form-bg">
    <div className="container">
        <div className="row">
            
                <div className="form-container">
                    <h3 className="title">My Account</h3>
                    <form className="form-horizontal">
                        <div className="form-icon">
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i class="fa fa-user"></i></span>
                            <input type="email" className="form-control" placeholder="Username(Id Number)"/>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i className="fa fa-lock"></i></span>
                            <input type="password" className="form-control" placeholder="Password"/>
                            <h4>
                            
                           
                          {/* <div>
                        
                         <input type="radio" id="contactChoice1" name="contact" value="email" />
                         <label for="contactChoice1"><center><h5> You are :</h5> </center>  <h6> Faculty  </h6></label>
                         
                        <input type="radio" id="contactChoice2" name="contact" value="phone" />
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
                        <button onClick={()=>navigate('Home')} className="btn signin">Login</button>
                        <div>
                        <h6>Do not have an account?<a href="register">Sign up</a></h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}