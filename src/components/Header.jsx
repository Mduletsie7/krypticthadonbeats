// Header.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  var website = "https://krypticthadonbeats.com/"
  return (
    <header className="header">
      <div className="logo">Kryptic Tha Don</div>
      <nav>
        <ul>
          <li><Link to="LeaseBeats-section" smooth={true} duration={500}>Lease Beats</Link></li>
          <li>Discography</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
