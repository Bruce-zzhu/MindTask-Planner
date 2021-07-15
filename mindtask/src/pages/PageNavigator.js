import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./home/Home.js";
import Index from "./index/Index.js";
import About from "./about/About.js";
import LogIn from "./login/LogIn.js";
import SignUp from "./signup/SignUp.js";
import Contact from "./contact/Contact.js";
import EditPage from "./edit/EditPage.js";

const customHistory = createBrowserHistory();

const PageNavigator = () => {
  return (
    <div>
      <Router history={customHistory}>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/edit">
            <EditPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default PageNavigator;
