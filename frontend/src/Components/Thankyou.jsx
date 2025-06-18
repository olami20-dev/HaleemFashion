import React from 'react';
import './Thankyou.css'; 

const Thankyou = () => {
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your order has been successfully placed.</p>
      <p>We appreciate your shopping with us.</p>
      <a href="/" className="back-home-btn">Back to Home</a>
    </div>
  );
};

export default Thankyou;
