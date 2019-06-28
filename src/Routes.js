import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SUBREDDIT } from 'constants/api';
import 'styles/App.css';


import Home from 'views/containers/Home';
import About from 'views/components/About';
import logo from 'logo.svg';

const Routes = () => (
  <Router>
    <div>
      <nav className="navigation">
        <div className="navigation-title">
          <img src={logo} className="app-logo" alt="logo" />
          <span>{SUBREDDIT}</span>
        </div>
        <ul className="navigation-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Routes;