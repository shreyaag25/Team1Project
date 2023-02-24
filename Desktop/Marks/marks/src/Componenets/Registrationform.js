import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Registrationform() {
  const navigate=useNavigate()
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
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" placeholder=' Name'/>
                   
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Id Number'/>
                  
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="text" className="form-control form-control-lg" id="birthdayDate" placeholder='Password'/>
                   
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
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
                    <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder='Email' />
                    
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <select className="select form-control-lg">
                    <option value="1" selected>Select year of study</option>
                    <option value="2">1st year</option>
                    <option value="3">2nd year</option>
                    <option value="4">3rd year</option>
                    <option value="4">4th year</option>
                  </select>
                  </div>

                </div>
              </div>

              <div className="row">
              <div className="col-md-6 mb-4 pb-2">

<div className="form-outline">
<select className="select form-control-lg">
                    <option value="1" selected>Select Branch</option>
                    <option value="2">CSE</option>
                    <option value="3">CSE(Honors)</option>
                    <option value="4">EEE</option>
                    <option value="5">ECE</option>
                    <option value="6">Mechanical</option>
                    <option value="7">BBA</option>
                  </select>
  
</div>

</div>
<div className="col-md-6 mb-4 pb-2">

<div className="form-outline">
<input  type="text" className="form-control form-control-lg"  value="Student" readonly/>
</div>

              </div>
              </div>

              <div>
              <button className="form-control form-control-lg reg" onClick={()=>navigate('regis')}>Register</button>
                
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
