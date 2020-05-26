import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {Home} from '../pages/Home';
import {News} from '../pages/News';
import {Profile} from '../pages/Profile';

export const Header = () => {
  return (
    <Router>
      <nav class="navbar sticky-top navbar-expand-md bg-dark navbar-dark">
        <Link to={'/'} class="brand-title" > Regiolab </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={'/'} class="nav-link" > Home </Link>
            </li>
            <li class="nav-item">
              <Link to={'/news'} class="nav-link" > News </Link>
            </li>
            <li class="nav-item">
              <Link to={'/profile'} class="nav-link" >Profile</Link>
            </li>    
          </ul>
        </div>  
      </nav>

    <div className="pages">
        <Switch>         
            <Route exact path='/' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/profile' component={Profile} />
        </Switch>
    </div>
      
  </Router>  
  )
}

