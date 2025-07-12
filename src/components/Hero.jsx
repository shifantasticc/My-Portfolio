import React from 'react';
import './Hero.css';
import Image from "/WebDev.png"

const Hero = () => {
  return (
    <div className="hero" id='home'>
      <div className="Home-Intro">
        <h1><i>Hi There!</i>👋</h1>
        <h1>I'M SHIFA SHAIKH</h1>
        <h2><span>MERN Stack Web-Developer.</span></h2>
      </div>
      <div className="Home-Img">
       <img
          src={Image}
          alt="Web Developer"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
