// import React from 'react'
import { useState } from "react";
// import { Button } from "@mui/material";

import DosBranch from "../../components/dosbranch/dosbranch";
import MedBranch from "../../components/medbranch/medbranch";
import "./profile.css"
import Header from "../../components/header/header";
import CloseIcon from '@mui/icons-material/Close';
import { ProfileData } from "../../utils/data";



const Profile = () => { 

  const [open,setOpen]=useState(false)

  const PopUpPatiantInfo=()=>
  {
      return (
        <>
         <div className='patientInfo'> 
            <div className="container">
                 
            <div className="centre">
              <div style={{
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:"center",
                
                // width:'100%'
                // flexDirection:''
              }}>

                 <h3 className='title' style={{
                  
                 }}>Information of Patient</h3>
          
                  {/* <Button variant="outlined" > */}
            <CloseIcon  htmlColor="#1c2833 " sx={{cursor:'pointer' , mt:'25px'}} onClick={() => setOpen(false)} />
            {/* </Button> */}

                  {/* <button className="btn" onClick={() => setOpen(false)}>
                  close
                </button> */}
          
                            </div>
              <div className="info">
                {
                  ProfileData.map((item) => (
                    <>
                     <span style={{
                    display:'flex',
                    // justifyContent:'center',
                    alignItems:'center',
                    gap:'10px',
                    width:'100%',
                    margin:'10px 0'
                  }}>
                    <h5 style={{width:'30%'}}>{item.title} : </h5>
                    <p style={{width:'60%'}}>{item.description}</p> 
                  </span>
    
                    </>
                  ))
                }
                 
                  
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
                <span className="medcard">
                  <MedBranch/>
                  <MedBranch/>
                </span>
              </div> 
              <button className='btn'>Discharge</button>  
              </div>
              <div className="vl">
                
              </div>
            <div className="right">
              <div className="doshis">
                <h3 className='title'>Dosage History</h3>
                <span className="doscard">
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
