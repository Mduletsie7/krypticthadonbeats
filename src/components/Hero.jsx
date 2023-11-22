// HeroSection.js
import React from "react";
import "../styles/Hero.css";
import image from "../assets/ForeverBlessed.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={image} alt="Latest" className="hero-image" />
        <div className="hero-text">
          <h1>Forever Blessed (feat. Neeks BTP)</h1>
          <p>
            Title: Forever Blessed. Performing Artist: Neeks BTP Produced by:
            Kryptic Tha Don Year: 2022
          </p>
          <button className="cta-button">Stream</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
