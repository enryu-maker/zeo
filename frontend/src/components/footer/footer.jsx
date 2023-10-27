// import React from 'react'
import "./footer.css"
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return ( 
    <div className="footer">
        <div className="container">
            <hr className="hr"/>
            <div className="bottom">
                <div className="left">
                    <h2>ZoeSync</h2>
                    <span className="span"> <CopyrightIcon/> ZoeSync Ltd. 2023</span>
                </div>
                <div className="right">
                <div className="link">
            <img src="./src/assets/language.png" alt="" className="img"/>
            <span>English</span>
          </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer;
