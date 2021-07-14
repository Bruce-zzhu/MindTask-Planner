import React from "react";
import MindTaskIcon from "../../assets/images/MindTaskIcon.png";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <div className="mindtask">
          <a href="/" className="mindtask-text">
            <img src={MindTaskIcon} alt="MindTaskIcon" className="mindtask-icon" />
            MindTask
          </a>
        </div>
        <div className="nav-right">
          <p>
            <a href="/about" className="nav-about">About</a>
          </p>
          <p>
            <a href="/Footer" className="nav-contact">Contact</a>
          </p>
        </div>
      </div>
    );
  }
}
export default NavBar;
