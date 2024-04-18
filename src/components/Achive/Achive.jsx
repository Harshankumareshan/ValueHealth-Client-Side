import React from 'react'
import './Achive.css';
import leftArrow from '../../assets/leftArrow.png'
const Achive = () => {
  return (
    <div className="partner-component">
    <img src={leftArrow} alt="arrowland.png" className="partner-image" />
    <div className="container-boxes">
      <div className="container-box">
        <h3>2015</h3>
        <hr className="orange-line" />
        <li>Value Health acquired by a top-5 CRO,</li>
        <li>Joined forces to empower patients, HCPs and Life Sciences companies with custom solutions.</li>
      </div>
      <div className="container-box">
        <h3>2019</h3>
        <hr className="orange-line" />
        <li>Value Health was reborn as an independent entity Led by its founding team.</li>
      <li>Our renewed focus on transforming Healthcare ecosystem with technological solutions.</li>
      </div>
      <div className="container-box">
        <h3>2021 - 2022</h3>
        <hr className="orange-line" />
        <li>Partnered with Indegene and Syneos to build their technology and regulatory capabilities.</li>
      <li>Introduced BOT model to build capabilities for our partners.</li>
      </div>
      <div className="container-box">
        <h3>2023</h3>
        <hr className="orange-line" />
        <li>Significant investments were made in AI, Machine Learning, Digital Transformation Services.</li>
        <li>Patient Nexus, a turnkey PSP solution was launched and listed on Salesforce Marketplace</li>
      </div>
      <div className="container-box">
        <h3>2024 &  Beyond</h3>
        <hr className="orange-line" />
        <li>By consistently delivering transformative solutions for diverse partners over the past decade, 
            we not only fulfilled our purpose of driving patient outcomes through technology but have also driven 
            significant positive impact for countless lives worldwide…and we’re only getting started to take patient care to a whole new level.</li>
      </div>
    </div>
  </div>
  )
}

export default Achive