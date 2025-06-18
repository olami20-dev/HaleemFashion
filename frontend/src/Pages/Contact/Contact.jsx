import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate async "sending"
    setTimeout(() => {
      setStatus('sent');
    }, 3000);
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Us</h2>
      <p>Have a question or need help with your order? Reach out!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          rows="5"
          value={formState.message}
          onChange={handleChange}
          required
        ></textarea>
            <button
            type="submit"
              disabled={status === 'loading'}
                className={status === 'sent' ? 'sent' : ''}
            >
            {status === 'loading' ? 'Sending...' : status === 'sent' ? 'Sent ' : 'Send Message'}
          </button>

      </form>

      <div className="contact-info">
        <div><strong>Email:</strong> support@haleemfashion.com</div>
        <div><strong>Phone:</strong> +234 9137 2359 01</div>
        <div><strong>Address:</strong> 123 Trendy St, Lagos, Nigeria</div>
      </div>
    </motion.div>
  );
};

export default Contact;
