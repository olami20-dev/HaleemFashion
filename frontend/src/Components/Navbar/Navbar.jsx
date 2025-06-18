import React, { useState } from 'react';
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useCart } from '../CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cartItems} = useCart();
  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <div className="logo">
        <img src="Haleem.png" alt="logo" />
      </div>

      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/men" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Men</NavLink></li>
        <li><NavLink to="/women" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Women</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>

      <div className="icons">
        <div className="cart-icon" onClick={() => navigate("/checkout")} >
          <FaShoppingBag size={24} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
        <FaUser size={24} />
      </div>
    </div>
  );
};

export default Navbar;
