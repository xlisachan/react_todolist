import React from 'react';
import './stylesheets/App.css';
import ListContainer from './components/ListContainer';
import Background from './components/Background';

const App = () => (
  <div className="Desktop">
    <ListContainer />
    <Background />
  </div>
);

export default App;