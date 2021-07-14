

import React from 'react';
import './App.css';
import background from './Background.jpg'
import PageNavigator from './pages/PageNavigator.js';
import Nevbar from './components/nevigator/nevigator_bar'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        
        <div class = "bg_image"
          style = {{
            backgroundImage: 'url('+background+')',
            backgroundSize: "Cover",
            height:"100vh",
           
          
          }}><Nevbar/>
          <PageNavigator />
          <Footer/>
          </div>
      
      
      </div>
      
    );
  }
}

export default App;