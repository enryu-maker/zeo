import React, { useState } from 'react'
import "../../pages/profile/profile.css"
import MedBranch from '../medbranch/medbranch'
import CloseIcon from '@mui/icons-material/Close';
import { Link, useParams } from 'react-router-dom';
import { ProfileData, ProfilesMedData } from '../../utils/data';
import Doscard from '../doscard/doscard';

export const LeftComponent = ({data}) => {
    const {id} = useParams()
    const [open , setOpen] = useState(false)
    // const medData = ProfilesMedData[id-1]
    // console.log(medData);

    const PopUpMedHis=()=>
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
              <div className="info" style={{
                overflow:'scroll',
              }}>
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
                    <h5 style={{width:'30%'}}>{item.title} : </h5>
                    <p style={{width:'60%'}}>{item.desc}</p> 
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
     <div className="left">
              <div className="medhis">
                <h3 className='title'>Medical History</h3>
                <span className="medcard" onClick={() => setOpen(true)}>
                { data.desc.slice(-4,-1).map((item, id)=>
                    
                        <MedBranch data={item} key={id} />
                   )

                }
                
                </span>
              </div> 
              <Link to="/bill" style={{
                width:'100%'
              }} >              
              <button className='btn' >Discharge</button>  
              </Link>

              </div>

              {
                open && (
                    <> 
                     <PopUpMedHis data={data} />
                    </>
                )
              }
    </>
  )
}


export const RightComponent = ({data}) => {
    const [open,setOpen]=useState(false)

//     const PopUpDosHistory=()=>
//   {
//       return (
//         <>
//          <div className='patientInfo'> 
//             <div className="container">
                 
//             <div className="centre">
//               <div style={{
//                 display:'flex',
//                 justifyContent:'space-evenly',
//                 alignItems:"center",
                
//                 // width:'100%'
//                 // flexDirection:''
//               }}>

//                  <h3 className='title' style={{
                  
//                  }}>Information of Patient</h3>
          
//                   {/* <Button variant="outlined" > */}
//             <CloseIcon  htmlColor="#1c2833 " sx={{cursor:'pointer' , mt:'25px'}} onClick={() => setOpen(false)} />
//             {/* </Button> */}

//                   {/* <button className="btn" onClick={() => setOpen(false)}>
//                   close
//                 </button> */}
          
//                             </div>
//               <div className="info">
//                 {
//                   data.info.map((item) => (
//                     <>
//                      <span style={{
//                     display:'flex',
//                     // justifyContent:'center',
//                     alignItems:'center',
//                     gap:'10px',
//                     width:'100%',
//                     margin:'10px 0'
//                   }}>
//                     <h5 style={{width:'30%'}}>{item.title} : </h5>
//                     <p style={{width:'60%'}}>{item.description}</p> 
//                   </span>
    
//                     </>
//                   ))
//                 }
                 
                  
//                </div>
               
//           </div>
    
//             </div>
           
//         </div> 
//         </>
//       )
//     }

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
                  data.pateintsdetails.map((item) => (
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
      <>
      <div className="right">
              <div className="doshis">
                <h3 className='title'>Dosage History</h3>
                <span className="doscard">
                  {/* <DosBranch/> */}
                  {
                    data.info.map((item) => <Doscard data={item} />)
                  }
                  {/* <div className="time">Morning </div> */}
                </span>
              </div>
              <button className='btn' onClick={()=> setOpen(true)}>Pateint Details</button>  
              
              </div>

              {
      open ? <>
      <PopUpPatiantInfo open={open} setOpen={setOpen}/>
      </>:null
    }
      </>
    )
  }