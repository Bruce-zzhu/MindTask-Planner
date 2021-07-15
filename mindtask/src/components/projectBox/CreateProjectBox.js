import React, { Component } from "react";
import CreateButton from "../../assets/images/CreateButton.png";
import "./CreateProjectBox.css";

class CreateProjectBox extends Component {
  render() {
    return (
      
        <button className="create-box" >
          <h3>Create</h3>
          <img src={CreateButton} alt="CreateButton" />
        </button>
      
    );
  }
}

export default CreateProjectBox;
