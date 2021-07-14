
import React from 'react';


class About extends React.Component{
    render () 
    {
        return (
        
        <div>
             
            <h1> about this App</h1>
            <p>In our daily life, we found it very hard to key motivated to 
                complete our tasks in time. It's usually the case that we don't 
                begin until several days before due days. It may severely affect our
                life routine and the quatity of the tasks.
            </p>
            <br></br>
            <p>To solve this problem, our app is created to help organize our 
                tasks and track the progress of our projects </p>
        </div>
    );
    }
}

export default About;




import React from "react";
import NavBar from "../../components/nav_bar/NavBar";
import './About.css';
// import WorkHard from "../../../assets/images/WorkHard.png";

class About extends React.Component {
  render() {
    return (
      <div>
        
        <div>
          <h1 className="about-app">About this App</h1>
          <div className="about-content">
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
      </div>
    );
  }
}

export default About;

