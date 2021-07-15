import React, { Component } from "react";
import "./ProjectBox.css";

class ProjectBox extends Component {
  finishProjectHandle = () => {
    const name = this.props.project.name;
    this.props.onFinishProject(name);
  };

  render() {
    return (
      <div>
        <button className="project-box">
          <h3>{this.props.project.name}</h3>
          <p className="subtasks">
            <ul>
              <li>subtask 1</li>
              <li>subtask 2</li>
              <li>subtask 3</li>
            </ul>
          </p>

          <button className="finished" onClick={this.finishProjectHandle}>
            Finished
          </button>
        </button>
      </div>
    );
  }
}

export default ProjectBox;
