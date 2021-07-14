

import React from 'react';
import './App.css';
import background from './Background.jpg'

import NavBar from './components/nav_bar/NavBar'


import PageNavigator from './pages/PageNavigator.js'
import Footer from './components/Footer'

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
           <div class = "bg_image"
             style = {{
            backgroundImage: 'url('+background+')',
            backgroundSize: "Cover",
            height:"100vh",
           
          
          }}></div>
      
          <Nevbar/>
          <PageNavigator />
          <Footer/>
          
      

        <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
        <PageNavigator /> 
        </div>
      
    );
  }
}

export default App;