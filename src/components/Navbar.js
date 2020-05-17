import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Profile from './Profile';


export class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar">
                    <Link to={'/'} className="nav-link"> Home </Link>
            <Link to={'/news'} className="nav-link">News</Link>
            <Link to={'/profile'} className="nav-link">Profile</Link>
                    </nav>
                    </div>
                    <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/news' component={News} />
              <Route path='/profile' component={Profile} />
          </Switch>
                
            </Router>    
        );
    }
}

export default Navbar;