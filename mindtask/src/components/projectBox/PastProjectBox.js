import React, { Component } from "react";
import "./PastProjectBox.css";

class PastProjectBox extends Component {
  render() {
    return (
      <div>
        <button className="past-project-box">
          <h3>Project Name</h3>
          <p className="subtasks">
            <ul>
              <li>subtask 1</li>
              <li>subtask 2</li>
              <li>subtask 3</li>
            </ul>
          </p>

        </button>
      </div>
    );
  }
}

export default PastProjectBox;
