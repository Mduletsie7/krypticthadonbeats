// Header.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Kryptic Tha Don</div>
      <nav>
        <ul>
          <li><Link to="LeaseBeats-section" smooth={true} duration={500}>Lease Beats</Link></li>
          <li><Link to="notable-credits" smooth={true} duration={500}>Credits</Link></li>
          <li><Link to="rw-contact-form" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
