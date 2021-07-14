

import React from 'react';
import './App.css';

import PageNavigator from './pages/PageNavigator.js';
import Nevbar from './components/nevigator/nevigator_bar'

class App extends React.Component {
  render() {
    return (
      <div>
      <Nevbar/>
      
      <PageNavigator />
      </div>
      
    );
  }
}

export default App;