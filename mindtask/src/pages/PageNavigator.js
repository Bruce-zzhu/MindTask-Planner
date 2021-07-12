import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home/Home.js';

const PageNavigator = () => {
    return(
        <Router>
            <Route path="/home" component= {Home} />          
        </Router>
    );
};
export default PageNavigator;

