import React from "react";
import MindTaskIcon from "../../assets/images/MindTaskIcon.png";
import "./NavBar.css";

class NavBar extends React.Component {
  logoutHandle = () => {
    localStorage.setItem("isLoggedIn", false);
  }

  login = () => {
    localStorage.setItem("isLoggedIn", true);
  }

  isLoggedIn = () => {
    return localStorage.getItem("isLoggedIn"); 
  }

  render() {
    let navBarContent;
    if (this.isLoggedIn()) {
      navBarContent = (
      <div> 
        <li className="nav-about">
          <a onClick={this.logoutHandle} href="/" className="about">
            Log out
          </a>
        </li>
        
      </div>
      );
    } else {
      navBarContent = (
        <div>
          <li className="nav-contact">
            <a href="/contact" className="contact" onClick={this.login}>
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
    );
  }
}
export default NavBar;
