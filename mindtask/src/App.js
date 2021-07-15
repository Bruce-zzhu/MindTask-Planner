

import React from 'react';
import './App.css';
import background from './assets/images/Background.png'

import NavBar from './components/nav_bar/NavBar'


import PageNavigator from './pages/PageNavigator.js'
import Footer from './components/footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    }
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    return (
      
        
        <div>
          <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
           <div class = "bg_image"
             style = {{
            backgroundImage: 'url('+background+')',
            backgroundSize: "Cover",
            height:"100vh",
            }}>
      
         
          
        <PageNavigator /> 
        
        <Footer/>
        
        
        </div>
        </div>
      
    );
  }
}

export default App;