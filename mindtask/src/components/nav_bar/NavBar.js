import React from "react";
import MindTaskIcon from "../../assets/images/MindTaskIcon.png";
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // localStorage seems to store string type
      isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    }
  }
  logoutHandle = () => {
    localStorage.setItem("isLoggedIn", false);
    this.setState({
      isLoggedIn: false,
    })
  }

  login = () => {
    localStorage.setItem("isLoggedIn", true);
    this.setState({
      isLoggedIn: true,
    })
  }


  render() {
    let navBarContent;
    console.log(this.state.isLoggedIn)
    if(this.state.isLoggedIn) {
      navBarContent = (
      <div> 
        
          <a href="/" onClick={this.logoutHandle} className="logout">
            Log out
          </a>
        
        
      </div>
      );
    } else {
      navBarContent = (
        <div>
          <li className="nav-contact">
            <a href="/home" className="contact" onClick={this.login}>
              Login
            </a>
          </li>
          <li className="nav-contact">
            <a href="/contact" className="contact">
              Contact
            </a>
          </li>
          <li className="nav-about">
            <a href="/about" className="about">
              About
            </a>
          </li>
        </div>
      );
    }
    return (
      <header>
      <div class="navbar">
        <div className="mindtask">
          <a href="/" className="mindtask-text">
            <img
              src={MindTaskIcon}
              alt="MindTaskIcon"
              className="mindtask-icon"
            />
            MindTask
          </a>
        </div>
        <div className="nav-items">
          <ul>{navBarContent}</ul>
        </div>
      </div>
      </header>
    );
  }
}
export default NavBar;
