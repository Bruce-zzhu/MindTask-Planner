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



  render() {
    let navBarContent;
    console.log(this.state.isLoggedIn)
    if(this.state.isLoggedIn) {
      navBarContent = (
        <div>
          <div className="mindtask">
            <a href="/home" className="mindtask-text">
              <img
                src={MindTaskIcon}
                alt="MindTaskIcon"
                className="mindtask-icon"
              />
              My Projects
            </a>
          </div>
          <div className="nav-items">
            <ul>
              <div>
                <a href="/" onClick={this.logoutHandle} className="logout">
                  Log out
                </a>
              </div>
            </ul>
          </div>
      </div>
      );
    } else {
      navBarContent = (
        <div>
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
          <ul>
              <li className="nav-contact">
                <a href="/login" className="login">
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

          </ul>
          </div>
        </div>
      );
    }
    return (
      <header>
      <div class="navbar">
        {navBarContent}

      </div>
      </header>
    );
  }
}
export default NavBar;
