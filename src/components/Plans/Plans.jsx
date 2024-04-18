import React from 'react'
import './Plans.css'
import salesforce from'../../assets/salesforce.png';
import google from'../../assets/google.png';
import aws from'../../assets/aws.png';
import jira from'../../assets/jira.png';
import change from'../../assets/change.png';
import truepill from'../../assets/truepill.png';
import vonage from'../../assets/vonage.png';
import five9 from'../../assets/five9.png';
import indegene from'../../assets/indegene.png';
import pverify from'../../assets/pverify.png';
const Plans = () => {
  return (
    <div className="partners-container">
        <hr style={{margin:"5%"}}/>
    <h2 className="partners-heading">Our Partners</h2>
    <div className="partners-grid">
      <div className="partner">
        <img src={salesforce} alt="Partner 1" />
      </div>
      <div className="partner">
        <img src={google} alt="Partner 2" />
      </div>
      <div className="partner">
        <img src={aws} alt="Partner 3" />
      </div>
      <div className="partner">
        <img src={jira} alt="Partner 4" />
      </div>
      <div className="partner">
        <img src={change} alt="Partner 5" />
      </div>
      </div>
      <div className='partner-grid'>
        <div className="partner">
        <img src={truepill} alt="Partner 1" />
      </div>
      <div className="partner">
        <img src={vonage} alt="Partner 2" />
      </div>
      <div className="partner">
        <img src={five9} alt="Partner 3" />
      </div>
      <div className="partner">
        <img src={indegene} alt="Partner 4" />
      </div>
      <div className="partner">
        <img src={pverify} alt="Partner 5" />
      </div>
      </div>
    </div>

  )  
}

export default Plans