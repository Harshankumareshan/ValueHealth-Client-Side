import React from 'react'
import './Reasons.css'
import tick from '../../assets/tick.png';
const Reasons = () => {
    return (
        
        <div className="right-r">
            
            <div className="patients-header">
            <hr/>
        <span>Patients</span>
        <div className="buttons">
            <button>HCP </button>
            <button> Patients/Biometrich</button>
        </div>
    </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span> Patient Support Services</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span> Patient Education Services</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span> Financial Assistance Services</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span> Patient Engagement Solutions</span>
                    </div>
                </div>
        </div>


    )
}

export default Reasons