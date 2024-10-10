import './NavbarHero.css';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

export const NavbarHero = () => {
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <>
      <nav className={navbar ? 'navbar-container blue-nav' : 'navbar-container'}>
        <div>
          <img src="/src/assets/images/logo.png" alt="" className="website-logo" />
        </div>

        {/* Desktop Navbar */}
        <ul className={`nav-menu ${menuOpen ? 'active' : 'hide-menu'}`}>
          <li><Link to="home" smooth={true} duration={500}><a href="">Home</a></Link></li>
          <li><Link to="program" smooth={true} duration={500}><a href="">Program</a></Link></li>
          <li><Link to="about" smooth={true} duration={500}><a href="">About us</a></Link></li>
          <li><Link to="campus" smooth={true} duration={500}><a href="">Campus</a></Link></li>
          <li><Link to="test" smooth={true} duration={500}><a href="">Testimonials</a></Link></li>
          <li><Link to="contact" smooth={true} duration={500}><a className="btn" href="">Contact us</a></Link></li>
        </ul>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </div>
      </nav>

      <div className="hero navbar-container" id="home">
        <div className="hero-text">
          <div>
            <h1>We Ensure better education for a better world</h1>
          </div>

          <div><p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p></div>

          <div>
            <button className="btn">Explore More <svg className="arrow-icon-black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></button>
          </div>
        </div>
      </div>
    </>
  );
};
