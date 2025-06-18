import React from 'react';
import '../Logo/logo.css';

const Logo = () => {
  return (
    <div className='logo-section'>
      <h3>As seen in:</h3>
      <div className='logo-container'>
        <div className="each-logo">
          <img src="logo1.svg" alt="1" />
        </div>
        <div className="each-logo">
          <img src="logo2.svg" alt="2" />
        </div>
        <div className="each-logo">
          <img src="logo3.svg" alt="3" />
        </div>
        <div className="each-logo">
          <img src="logo4.svg" alt="4" />
        </div>
        <div className="each-logo">
          <img src="logo5.svg" alt="5" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
