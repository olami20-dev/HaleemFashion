import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We bring you the latest trends in modern shoes for men and women. Comfort meets style at every step.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/checkout">Cart</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Haleem Fashion. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
