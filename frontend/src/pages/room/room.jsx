// import React from 'react'
import './room.css';
import Bed from '../../components/bed/bed'; 
import Header from '../../components/header/header';

const Room = () => {
  return (<>
  <div style={
    {
      width:'100%',
    }
  }>

      <Header/>
    <div className='room'>
        <div className="container"> 
          <div className="beds">
            <Bed/>
            <Bed/>
            <Bed/>
            <Bed/>
            <Bed/>
            <Bed/>
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
 