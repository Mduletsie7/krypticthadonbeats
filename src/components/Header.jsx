// Header.jsx
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  var website = "https://krypticthadonbeats.com/"
  return (
    <header className="header">
      <div className="logo">Kryptic Tha Don</div>
      <nav>
        <ul>
          <li onClick={()=> window.open(website, "_blank")}>Lease Beats</li>
          <li>Discography</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
