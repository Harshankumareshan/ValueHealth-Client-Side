import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import Po1 from "../../assets/po1.jpg";
import Po2 from "../../assets/po2.jpg";
import Po3 from "../../assets/po3.jpg";
import Po4 from "../../assets/po4.jpg";

const Programs = () => {
  // Array to store imported images
  const images = [Po1, Po2, Po3, Po4];

  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className='stroke-normal'>Industries </span>
        <span className='stroke-text'> We </span>
        <span className='stroke-normal'>Focus</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            <img src={images[index]} alt={program.heading} style={{ width: '90%', height: 'auto' }} />
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
