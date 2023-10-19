// import React from 'react'
import { useState } from "react";
import DosBranch from "../../components/dosbranch/dosbranch";
import MedBranch from "../../components/medbranch/medbranch";
import "./profile.css"
import Header from "../../components/header/header";



const Profile = () => { 

  const [open,setOpen]=useState(false)

  const PopUpPatiantInfo=(

    setOpen
  
    )=>{
      return (
        <>
         <div className='patientInfo'> 
            <div className="container">
              <button onClick={() => setOpen(false)}>
                close
              </button>
    
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
        </>
      )
    }
    



  return (
    <><div style={
      {
        width:'100%',
      }
    }>
    <Header/>
    <div className='profile'>
            {/* <button className='backbtn'>Back</button> */}
        <div className="container">
            <div className="left">
              <div className="medhis">
                <h3 className='title'>Medical History</h3>
                <span>
                  <MedBranch/>
                  <MedBranch/>
                </span>
              </div> 
              <button className='btn'>Discharge</button>  
              </div>
            <div className="right">
              <div className="doshis">
                <h3 className='title'>Dosage History</h3>
                <span>
                  <DosBranch/>
                </span>
              </div>
              <button className='btn' onClick={()=> setOpen(true)}>Pateint Details</button>  
              
              </div>

        </div>
      
    </div>
    </div>
    {
      open ? <>
      <PopUpPatiantInfo open={open} setOpen={setOpen}/>
      </>:null
    }
    </>
  )
}

export default Profile;
