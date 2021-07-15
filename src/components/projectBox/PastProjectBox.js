import React, { Component } from "react";
import "./PastProjectBox.css";

class PastProjectBox extends Component {
  deleteProjectHandle = () => {
    const name = this.props.project.topic;
    this.props.onDeleteProject(name);
  };

  subTaskList = () => {
    const children = this.props.project.children;
    if(children) {
      return children.map((ele) => {
        return <li>{ele.topic}</li>
      })
    }
  }

  render() {
    const subTaskList = this.subTaskList();

    return (
      <div>
        <button className="past-project-box">
          <h3>{this.props.project.topic}</h3>
          <p className="subtasks">
            <ul>
              {subTaskList}
            </ul>
          </p>
          <button className="delete" onClick={this.deleteProjectHandle}>
            Delete
          </button>
        </button>
      </div>
    );
  }
}

export default PastProjectBox;
