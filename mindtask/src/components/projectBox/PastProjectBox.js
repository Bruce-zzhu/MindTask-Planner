import React, { Component } from "react";
import "./PastProjectBox.css";

class PastProjectBox extends Component {
  deleteProjectHandle = () => {
    const name = this.props.project.name;
    this.props.onDeleteProject(name);
  }
  render() {
    return (
      <div>
        <button className="past-project-box">
          <h3>{this.props.project.name}</h3>
          <p className="subtasks">
            <ul>
              <li>subtask 1</li>
              <li>subtask 2</li>
              <li>subtask 3</li>
            </ul>
          </p>
          <button className="delete" onClick={this.deleteProjectHandle}>Delete</button>
        </button>
      </div>
    );
  }
}

export default PastProjectBox;
