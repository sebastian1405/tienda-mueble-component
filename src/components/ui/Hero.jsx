import React from "react";
import "./Hero.css";

const Hero = ({ img }) => {
  return (
    <div className="hero">
      <img src={img} alt="Hero" />
    </div>
  );
};

export default Hero;
