import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Header} from './components/Header'

import {Home} from './pages/Home'
import {Article} from './pages/Article'
import {News} from './pages/News'
import {History} from './pages/History'

function App() {
  return (
    <Router>
    <Header/>

      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/articles/:id/" component={Article} />
            <Route exact path="/news" component={News} />
            <Route exact path="/history" component={History} />
          </Switch>
      </div>

    </Router>
  );
}

export default App;
