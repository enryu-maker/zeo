import React, { useState } from 'react'
import './doscard.css'
import { Button } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
const Doscard = ({data}) => {
  const [open , setOpen] = useState(false)


  const PopUpDosInfo=({data ,title})=>
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

                 <h3 className='title' style={{ textTransform:'capitalize'               
                 }}>{title}</h3>
          
                  {/* <Button variant="outlined" > */}
            <CloseIcon  htmlColor="#1c2833 " sx={{cursor:'pointer' , mt:'25px'}} onClick={() => setOpen(false)} />
            {/* </Button> */}

                  {/* <button className="btn" onClick={() => setOpen(false)}>
                  close
                </button> */}
          
                            </div>
              <div className="info">
                {
                  data.desc.map((item) => (
                    <>
                     <span style={{
                    display:'flex',
                    // justifyContent:'center',
                    alignItems:'center',
                    gap:'10px',
                    width:'100%',
                    margin:'10px 0'
                  }}>
                    <h5 style={{width:'60%', textTransform:'capitalize'}}>{item.medName} : </h5>
                    <p style={{width:'30%'}}>{item.dos}</p> 
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
    <>
    <div className="time" style={{textTransform:'capitalize'}} onClick={() => setOpen(true)}>{data.title} </div>
    
    {
      open && (
        
        <>
    <PopUpDosInfo data={data} title={data.title} />    
    </>
      )
    }
    </>
  )
}

export default Doscard;