// import React from 'react'
import "./patientInfo.css" 

const PatientInfo = () => {
  return (
    <div className='patientInfo'> 
        <div className="container">

        <div className="centre">
             <h3 className='title'>Information of Patient</h3>
          <div className="info">
              <span>
                <h5>Name : </h5>
                <p>Tony Stark</p>
              </span>

              <span>
                <h5>Address : </h5>
                <p>khatra mehel, shetan galli, shamshan ke samne</p>
              </span>

              <span>
                <h5>Mobile No : </h5>
                <p>0123456789</p>
              </span>

              <span>
                <h5>Age : </h5>
                <p>98</p>
              </span>

              <span>
                <h5>Gender : </h5>
                <p>M/F</p>
              </span>
           </div>
      </div>

        </div>
       
    </div>
  )
}

export default PatientInfo
