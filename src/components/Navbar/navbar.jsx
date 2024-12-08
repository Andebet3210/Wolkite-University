import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <img src={logo} alt="Logo" className='logo'/> 
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact us</button></li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;