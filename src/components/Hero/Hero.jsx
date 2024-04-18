import React from 'react'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"

import {motion} from 'framer-motion';
const Hero = () => {
  const transition ={type:'spring', duration : 3};
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero'>
    <div className='left-h'>
    
    <div className="the-best-ad">
     <motion.div
     initial={{left: mobile ? "165px":'238px'}}
     whileInView={{left: '8px'}}
     transition={{...transition,type: 'tween'}}
     ></motion.div>
      <span>the best Health Care in the town</span>
    </div>

    <div className="hero-text">
    <div>
      <span className='stroke-text'>What </span>
      <span>we do</span>
      </div>
      <div>
        <span>Health and Wellness</span>
        </div>
        <div>
          <span><h2>We help enterprises who are part of Healthcare to solve Cost, Quality and Access issues through technology solutions.</h2>
          <h4>Value Health has been at the forefront of solving many healthcare related problems for over a decade bringing advanced technology based solutions to accelerate patient health outcomes.

Our goal is to reimagine the healthcare industry which is set to reach 6-8 trillion by 2030 with a digital first and 
AI infused approach to solve the most critical problems which exist today in healthcare cost, quality and access.</h4>
          </span>
        </div>
      </div>
      {/* figures */}
<div className="figures">
  <div>
    <span>+140</span>
  <span>expert coaches</span>
  </div>
  <div>
    <span>+978</span>
  <span>members joined</span>
  </div>
  <div>
    <span>+50</span>
  <span>Fitness programs</span>
  </div>
</div>

<div className="hero-buttons">
<buttons className="btn">Get Started</buttons>
    <buttons className="btn">Learn More</buttons>
</div>
</div>
    <div className='right-h'>
      <button className="btn">Join Now</button>

      <motion.div 
      initial={{right: "-1rem"}}
      whileInView={{right: "4rem"}}
      transition={{...transition}}
      className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </motion.div>

      <img src={hero_image} alt="" className="hero-image"/>
      <motion.img
      initial={{right: "15rem"}}
      whileInView={{right: "32rem"}}
      transition={{...transition}}

       src={hero_image_back} alt="" className="hero-image-back"/>

      
      
    </div>
    </div>
  )
}

export default Hero