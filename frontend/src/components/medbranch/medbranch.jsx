// import React from 'react'
import "./medbranch.css"

const MedBranch = ({data}) => {
  return (
    <div className='medbranch'>
      <div className='branch'>
        <div className="circle"> </div>
        <div className="hline"> </div>
        <div className="info"> {data.desc} in {data.title} </div>
      </div>
      <div className="exbranch">
        <div className="vline"></div>
      </div>
    </div>
  )
}

export default MedBranch;
