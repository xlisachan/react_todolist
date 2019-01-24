import React, { Component } from 'react';
import './Desktop.css';
import List from './components/List/List';
import BackgroundItem from './components/BackgroundItem/BackgroundItem';

class Desktop extends Component {
  render() {
    return (
      <div className="Desktop">
        <List />
        <BackgroundItem />
      </div>
    );
  }
}

export default Desktop;
