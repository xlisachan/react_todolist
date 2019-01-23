import React, { Component } from 'react';
import './Desktop.css';
import List from './components/List/List';

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
        </div>
      </div>
    );
  }
}

export default Desktop;
