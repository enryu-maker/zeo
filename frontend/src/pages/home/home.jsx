// import React from 'react'
import "./home.css"
import {Link} from "react-router-dom";
import Footer from '../../components/footer/footer';

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <h3 className='title'>ZeoSync</h3>
        <Link to="/room"><button className='btn-start'>START</button></Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
