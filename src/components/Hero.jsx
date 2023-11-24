// HeroSection.js
import React from "react";
import "../styles/Hero.css";
// import image from "../assets/kryptic.png";

const Hero = () => {
  var emailAddress = "krypticthadonbeats.com"
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1><span className="herotxt-kryptic">Kryptic</span> Tha Don</h1>
          <p>
            Music Producer from Cape Town, South africa with a passion for Hip-Hop.
          </p>
          <button className="cta-button">
        <a href={`mailto:${emailAddress}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          Contact
        </a>
      </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
