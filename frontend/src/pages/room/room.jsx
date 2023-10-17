import React from 'react'
import './room.css';
import Bed from '../../components/bed';

const Room = () => {
  return (
    <div className='room'>
        <div className="container"> 
          <h3 className='head'> Room 101</h3>
          <div className="beds">
            <Bed/>
            <Bed/>
            <Bed/>
            </div> 
        </div> 
      
    </div>
  )
}

export default Room;
 