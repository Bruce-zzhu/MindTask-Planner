import {React} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from './home/Home.js';
import Index from './index/Index.js';

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
        </Switch>
      </Router>
    </div>
  );
};

export default PageNavigator;

