import React from 'react'
import './Headvid.css'
import herovid from'../../assets/herovid.mp4';
const Headvid = () => {
  return (
    <div className="headvid-container">
        <video className="video" autoPlay muted loop>
        <source src={herovid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="contact-button">Talk to an Experts</button>
    </div>
    
    
  )
}

export default Headvid