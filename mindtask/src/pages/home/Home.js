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
      projects: [
        
      ],
      pastProjects: [],
    };
  };

  createProject = () => {
    const initialProjects = this.state.projects.slice();
    const i = initialProjects.length + 1;
    initialProjects.push(
      {name: "Project "+i},
    );
    this.setState({
      projects: initialProjects,
    });
  };

  // finishProject = () => {

  // }

  render() {
    const porjectsElement = this.state.projects.map((project) => {
      return (
        <div className="box project"><ProjectBox project={project}/></div>
        
      );
    });
    const pastProjectsElement = this.state.pastProjects.map((project) => {
      return (
        <div className="box project"><ProjectBox project={project}/></div>
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
        <PastProjectBox />

        {pastProjectsElement}
      </div>
    );
  }
}

export default Home;
