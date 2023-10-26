// import React from 'react'
import { Button } from "@mui/material";
import "./header.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from "react-router-dom";

const Header = ({title,description}) => {

  const navigate = useNavigate()
  return (
    <div className="header">
        <div className="left">
            {/* <button className="back">back</button> */}
            <Button variant="outlined " onClick={()=> navigate(-1)} >
            <ArrowBackIcon  htmlColor="#eee" />
            </Button>
            
        </div>
        
        <div className="middle">
            <h3 className="title">{description} {title
            }</h3>
        </div>
        <div className="right">

        </div>
        </div>
  )
}

export default Header
