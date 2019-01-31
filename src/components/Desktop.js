import React, { Component } from 'react';
import '../stylesheets/Desktop.css';
import List from './List';
import BackgroundItem from './BackgroundItem';

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
