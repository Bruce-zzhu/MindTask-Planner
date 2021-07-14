import React from "react";
import "./Home.css";
import Calendar from "../../components/calendar/Calendar";
import CreateProjectBox from "../../components/projectBox/CreateProjectBox";
import ProjectBox from "../../components/projectBox/ProjectBox";
import PastProjectBox from "../../components/projectBox/PastProjectBox";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.getProjectsFromLocalStorage("projects"),
      pastProjects: this.getProjectsFromLocalStorage("pastProjects"),
      // Number of projects
      projectCount: 1,
    };
  };

  getProjectsFromLocalStorage(name) {
    const projects = localStorage.getItem(name);
    if(projects) {
      return JSON.parse(projects);
    }else {
      return [];
    }
  }

  createProject = () => {
    const initialProjects = this.state.projects.slice();
    const i = this.state.projects.length + this.state.pastProjects.length + 1;
    initialProjects.push(
      {name: "Project " + i},
    );
    this.setState({
      projects: initialProjects,
      projectCount: i + 1,
    });
    localStorage.setItem("projects",JSON.stringify(initialProjects));
  };

  finishProject = (name) => {
    // Find a project in projects and put is in pastProjects
    const projects = this.state.projects.slice();
    const pastProjects = this.state.pastProjects.slice();
    const index = projects.findIndex((element) => element.name === name);
    pastProjects.push(projects[index]);
    projects.splice(index,1);

    this.setState({
      projects: projects,
      pastProjects: pastProjects,
    })
    localStorage.setItem("projects",JSON.stringify(projects));
    localStorage.setItem("pastProjects",JSON.stringify(pastProjects));
  }

  deleteProject = (name) => {
    const pastProjects = this.state.pastProjects.slice();
    const index = pastProjects.findIndex((element) => element.name === name);
    pastProjects.splice(index,1);

    this.setState({
      pastProjects: pastProjects,
    })
    localStorage.setItem("pastProjects",JSON.stringify(pastProjects));
  }

  render() {
    const porjectsElement = this.state.projects.map((project) => {
      return (
        <div className="box project" ><ProjectBox project={project} onFinishProject={this.finishProject}/></div>
        
      );
    });
    const pastProjectsElement = this.state.pastProjects.map((project) => {
      return (
        <div className="box past-project"><PastProjectBox project={project} onDeleteProject={this.deleteProject}/></div>
      );
    });
    return (
      <div className="home">
        <Calendar />
        <h2 className="ongoing">Ongoing Peojects</h2>
        
        <div className="box create" onClick={this.createProject} >
          <CreateProjectBox />
        </div>
          {porjectsElement}

        <h2 className="past">Past Projects</h2>

        {pastProjectsElement}
      </div>
    );
  }
}

export default Home;
