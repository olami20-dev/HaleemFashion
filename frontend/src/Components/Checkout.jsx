import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Optional styling
import { useCart } from './CartContext';

const Checkout = () => {
    const {cartItems , updateQuantity, removeItem} = useCart();

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProceed = () => {
    setIsProcessing(true); 

    setTimeout(() => {
      setIsProcessing(false);
      navigate('/thankyou');
    }, 5000); 
  };

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('$', '')) || 0;
      return acc + price * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h2>Your Cart</h2>

      {isProcessing ? (
        <div className="loading-section">
          <p>Processing payment... Please wait</p>
          <div className="spinner"></div>
        </div>
      ) : (
        <>
         
                        {cartItems.map((item, index) => (
                <div className="checkout-item" key={index}>
                    <img src={item.image} alt={item.name} className="checkout-image" />
                    <div className="checkout-details">
                    <h4>{item.name}</h4>
                    <p>{item.brand}</p>
                    <p>{item.price}</p>
                    <div className="quantity-controls">
                        <button
                        type="button"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        >
                        -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                        type="button"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                        +
                        </button>
                    </div>
                    </div>
                    <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem(index)} // ← rename in your file
                    >
                    🗑️
                    </button>
                </div>
                            ))}

          
          

          <div className="cart-summary">
            <p><strong>Subtotal:</strong> ${getSubtotal()}</p>
            <button className="checkout-btn" onClick={handleProceed}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
