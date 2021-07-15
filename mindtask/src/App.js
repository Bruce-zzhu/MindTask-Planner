import React from "react";
import "./App.css";
import NavBar from "./components/nav_bar/NavBar";

import PageNavigator from "./pages/PageNavigator.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditPage from "./pages/edit/EditPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <PageNavigator />
      </BrowserRouter>
    );
  }
}

export default App;
