import React, { useState } from 'react';
import './Newsletter.css';
function NewsletterNavbar() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch('http://localhost:5000/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  
    if (res.status === 201) {
      alert('Subscribed successfully!');
      setEmail('');
    } else if (res.status === 409) {
      alert('You are already subscribed!');
    } else {
      alert('Subscription failed. Please try again later.');
    }
  };
  

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <form className="navbar-right" onSubmit={handleSubmit}>
        <span>Subscribe Us</span>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterNavbar;
