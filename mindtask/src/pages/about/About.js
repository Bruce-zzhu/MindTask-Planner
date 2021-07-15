


import React from "react";


import './About.css';
// import WorkHard from "../../../assets/images/WorkHard.png";

import "./About.css";
import WorkHard from "../../assets/images/WorkHard.png";
import CheckIcon from "../../assets/images/CheckIcon.png";


class About extends React.Component {
  render() {
    return (
      <div className="big-container">
        <div className="about-app">
          <h1 className="about-app-text">About this App</h1>
          <div className="about-content">
            <img src={WorkHard} className="work-image" alt="WorkHard" />
            <p>
              In our daily life, we found it very hard to key motivated to
              complete our tasks in time. It's usually the case that we don't
              begin until several days before due days. It may severely affect
              our life routine and the quatity of the tasks.
            </p>
            <p>
              To solve this problem, our app is created to help organize our
              tasks and track the progress of our projects.
            </p>
            
          </div>
        </div>

        <div className="can-do">
          <h1 className="can-do-text">What you can do</h1>

          <div className="check-icon">
            <ul className="check-icon-list">
              <li>
                <img src={CheckIcon} alt="CheckIcon" />
              </li>
              <li>
                <img src={CheckIcon} alt="CheckIcon" />
              </li>
              <li>
                <img src={CheckIcon} alt="CheckIcon" />
              </li>
            </ul>
          </div>

          <div className="can-do-content">
            <p>Visualize and manage your tasks on the mind map</p>
            <p>Have an overview of your project progress</p>
            <p>Link to your calendar</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

