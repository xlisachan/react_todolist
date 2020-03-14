import React from 'react';
import '../stylesheets/BackgroundItem.css'
import { FaGlobeAmericas } from 'react-icons/fa';

const Passport = () => (
  <div className="passport">
    <div className="passport-book">
      <div>PASSPORT</div>
      <div className="passport-globe"><FaGlobeAmericas /></div>
    </div>

    <div className="passport-ticket">
      <div className="passport-stripe"></div>
    </div>
  </div>
);

const Phone = () => (
  <div className="phone">
    <div style={{width: '94%', display: 'flex', justifyContent: 'space-between'}}>
      <div className="phone-camera1"></div>
      <div className="phone-camera2"></div>
    </div>
    
    <div className="phone-screen"></div>
  </div>
);

const Background = () => (
  <div className="background-items">
    <Phone />
    <Passport />
  </div>
);

export default Background;