import React, { Component } from 'react';
import './Desktop.css';
import List from './components/List/List';

class Desktop extends Component {
  render() {
    return (
      <div className="Desktop">
        <List />
      </div>
    );
  }
}

export default Desktop;
