import React from 'react';
import './stylesheets/App.css';
import ListContainer from './components/ListContainer';
import BackgroundItem from './components/BackgroundItem';

const App = () => (
  <div className="Desktop">
    <ListContainer />
    <BackgroundItem />
  </div>
);

export default App;