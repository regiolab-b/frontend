import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import {Header} from './components/Header'
import {Footer} from './components/Footer'

import {Home} from './pages/Home'
import {Article} from './pages/Article'
import {History} from './pages/History'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <Router>
    <Header/>

      <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/articles/:id/" component={Article} />
            <Route exact path="/history" component={History} />
          </Switch>
      </div>
    <Footer/>
    </Router>
    </AlertProvider>
  );
}

export default App;
