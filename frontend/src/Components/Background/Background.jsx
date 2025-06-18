import React from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import '../Background/background.css'


const Background = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          once: true,     
        });
      }, []);
  return (
    <div className='background-container' data-aos="fade-up" >
    <div className="background-content"  >
    <h1>Step Into Style</h1>
    <h2>Discover our latest collection of premium sneakers</h2>
    <p>Engineered for comfort. Designed to impress.</p>
    <NavLink to='/men'>
    <button className="btn1" data-aos="zoom-in-down" >Shop Men</button>
    </NavLink>
    <NavLink to='/women' >
    <button className="btn2" data-aos="zoom-in-up">Shop Women</button>  
    </NavLink>
</div>

  </div>
  )
}

export default Background

