import React from 'react';
import '../stylesheets/Desktop.css';
import List from './List';
import BackgroundItem from './BackgroundItem';

const Desktop = () => (
  <div className="Desktop">
    <List />
    <BackgroundItem />
  </div>
);

export default Desktop;