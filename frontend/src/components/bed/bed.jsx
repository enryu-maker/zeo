// import React from 'react'
import { Link } from "react-router-dom";
import "./bed.css"

const Bed = ({title , data}) => {
  console.log("data", data.id);
  return (
    <Link to={`/profile/${data.id}` }>
    <div className='bed'>
            <div className="bedicon">
              <img src="./src/assets/bed-h.png" alt="bed" className="img"/>
            </div>
            <h3 className='bedNo'>{title}</h3>
      
    </div>
     </Link>
  )
}

export default Bed;
