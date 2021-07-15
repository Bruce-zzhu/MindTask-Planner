import React, { Component } from "react";
import "./ProjectBox.css";

class ProjectBox extends Component {
  finishProjectHandle = () => {
    const name = this.props.project.topic;
    this.props.onFinishProject(name);
  };

  subTaskList = () => {
    const children = this.props.project.children;
    if(children) {
      return children.map((ele) => {
        return <li>{ele.topic}</li>
      })
    }
  }

  editProject = () => {
    var projects = localStorage.getItem("projects");
    if(projects) {
      projects = JSON.parse(projects);
      const index = projects.findIndex((element) => element.topic === this.props.project.topic);
      localStorage.setItem("current_project", projects[index] ? JSON.stringify(projects[index]) : "");
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }

  render() {
    const subTaskList = this.subTaskList();
    return (
      <form action="/edit">
        <button className="project-box" onClick={this.editProject}>
          <h3>{this.props.project.topic}</h3>
          <p className="subtasks">
            <ul>
              {subTaskList}
            </ul>
          </p>

          <button className="finished" onClick={this.finishProjectHandle}>
            Finished
          </button>
        </button>
      </form>
    );
  }
}

export default ProjectBox;
