// import React from 'react'
import './room.css';
import Bed from '../../components/bed/bed'; 
import Header from '../../components/header/header';
import { RoomsData } from '../../utils/data';
import { Link } from 'react-router-dom';

const Room = () => {
  const data = RoomsData;
  console.log(data[0].Beds);
  return (<>

  <div style={
    {
      width:'100%',
    }
  }>
      
      <Header title ={data[0].room} description={"Room"}/>
     
  
    <div className='room'>
        <div className="container"> 
          <div className="beds">
          {
    data[0].Beds.map((item) => (
      <>
    
      <Bed title={item.title} data={item} />
   
      </>
    ))
  }
            </div>
            <div className="clean">
              <button className='cleanbtn'>Cleaned</button>
            </div> 
        </div> 
      
    </div>
  </div>
  </>
  )
}

export default Room;
 