import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Profile from './Profile';


export class Header extends React.Component {
    render() {
        return (
            <Router>
              <div className="header">
                  <div className="title">           
                        <h1>Regiolab</h1>
                      </div>
                      </div>
                      <div className="navbar"> 
                      <Link to={'/'} > Home </Link>
                      <Link to={'/news'} >     News </Link>
                      <Link to={'/profile'} >Profile</Link>
              </div>

              <div className="pages">
                  <Switch>         
                      <Route exact path='/' component={Home} />
                      <Route path='/news' component={News} />
                      <Route path='/profile' component={Profile} />
                  </Switch>
              </div>
                
            </Router>    
        );
    }
}

export default Header;