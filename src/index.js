import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Contact from './pages/Contact';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div className="nav-space">
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div id="company" className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink to='/' activeClassName="navbar-brand"><span className="fas fa-coffee"></span> The Bean</NavLink>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/menu'>Menu</NavLink>
              </li>
              <li>
                <NavLink to='/events'>Events</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/menu' component={Menu} />
      <Route path='/events' component={Events} />
      <Route path='/contact' component={Contact} />
    </div>
  </Router>
    , document.getElementById('root'));
registerServiceWorker();
