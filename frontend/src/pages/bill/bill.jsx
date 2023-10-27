import React, { useState } from 'react'
import "./bill.css"
// import CloseIcon from '@mui/icons-material/Close';
import Lottie from "lottie-react";
import successAnimation from "../../assets/success.json";

const Bill = () => {
  const [open,setOpen]=useState(false)
  const PopUpSuccessful=()=>
  {
      return (
        <>
         <div className='succesful'> 
            <div className="container">
                 
            <div className="centre">
              <div style={{
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:"center",
                flexDirection:'column',
                padding:'10px 40px'
               }}>

                {/* <img src="" alt="" /> */}
                <Lottie animationData={successAnimation} loop={true} />
                 <h3 className='title' style={{}}>Patient Discharged Process Successfully</h3>
                             
               </div>
              
               
          </div>
    
            </div>
           
        </div> 
        </>
      )
    }

  return (
    <>
    <div className='bill'>
      <div className="container">
        <div className="centre">

                <h3 className='title'>Genrated Bill</h3>
               
        <div className="billsum">
           <div className="head">
            <h2>ZoeSync </h2>
           </div>
          <span style={{
            display:'flex',
            // justifyContent:'center',
            alignItems:'center',
            gap:'10px',
            width:'100%',
            margin:'10px 0'
          }}>  
            <h3>
            name:</h3>
          <p>harry</p>
          <h3>
            Addres:</h3>
          <p>Hogwards</p>
          </span>

          <span style={{
            display:'flex',
            // justifyContent:'center',
            alignItems:'center',
            gap:'10px',
            width:'100%',
            margin:'10px 0'
          }}>   
            
          </span>

          <div className='details' >
            <h2>Deatils</h2>
            <hr className='hr'/>
            <span className='span'> <p>SERVICE NAME</p> <p>AMOUNT Rs.</p></span>
            <hr />
            <span className='span' > <p>Room Rent</p> <p>4,000</p></span>
            <span className='span' > <p>Pharmacy</p> <p>4,000</p></span>
            <span className='span' > <p>MEDICAL EQUIPMENT</p> <p>4,000</p></span>
            <span className='span' > <p>CONSULTATIONS</p> <p>4,000</p></span>
            <span className='span' > <p>CONSUMABLES</p> <p>4,000</p></span>
            <hr className='hr' />
            <span  className='span'> <p>Bill Amount</p> <p>4,000</p></span>
          </div>
        </div>  
              <button className='btn' onClick={()=> setOpen(true)}>Discharge</button>  
        </div>
      </div> 
    </div>
    {
      open ? <>
      <PopUpSuccessful open={open} setOpen={setOpen}/>
      </>:null
    }
            </>

  )
}

export default Bill;
