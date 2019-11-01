import React from 'react';
import '../stylesheets/BackgroundItem.css'
import Phone from './Phone';
import Passport from './Passport';

const BackgroundItem = () => (
  <div className="background-items">
    <Phone />
    
    <Passport />
  </div>
)

export default BackgroundItem;