import React from "react";
import logo from "./corner.svg";

class Index extends React.Component {
  render () {
    return(
      <div style={{flex:1}}>
        <div style={{flex:1, textAlign:'center', paddingTop:"10%"}}>
          <text style={{fontSize:"80px"}}>
            Plan Your Projects
          </text>
        </div>
        <div style={{paddingTop:"15%"}}>
          <img src={logo} alt="logo"/>
        </div>
      </div>
    );
  }
}

export default Index;