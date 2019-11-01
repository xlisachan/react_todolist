import React from 'react';
import '../stylesheets/Desktop.css';
import ListContainer from './ListContainer';
import BackgroundItem from './BackgroundItem';

const Desktop = () => (
  <div className="Desktop">
    <ListContainer />
    <BackgroundItem />
  </div>
);

export default Desktop;