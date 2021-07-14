import {React} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from './home/Home.js';
import Index from './index/Index.js';
import About from './about/About.js';

const customHistory = createBrowserHistory();

const PageNavigator = () => {
  return(
    <div>
      <Router history={customHistory}>
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
          <Route path="/index">
            <Index/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>

        
        <Route path="/about">
            <About/>
        </Route>

          <Route path="/about">
            <About/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
};

export default PageNavigator;

