import React, { Component } from 'react';
import './Desktop.css';
import List from './components/List/List';
import { FaGlobeAmericas } from 'react-icons/fa';

class Desktop extends Component {
  render() {
    return (
      <div className="Desktop">
        <List />
        <div className="background-items">
          <div className="phone">
            <div className="phone-camera"></div>
            <div className="phone-screen"></div>
            <div className="phone-homebutton"></div>
          </div>
          <div className="passport">
            <div className="passport-book">
              <div>PASSPORT</div>
              <div className="passport-globe"><FaGlobeAmericas /></div>
            </div>
            <div className="passport-ticket">
              <div className="passport-stripe"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
