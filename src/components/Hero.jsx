// HeroSection.js
import React from "react";
import "../styles/Hero.css";
import image from "../assets/kryptic.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={image} alt="Latest" className="hero-image" />
        <div className="hero-text">
          <h1><span className="herotxt-kryptic">Kryptic</span> Tha Don</h1>
          <p>
            Hip-Hop Producer, Mix Engineer
          </p>
          <button className="cta-button">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
