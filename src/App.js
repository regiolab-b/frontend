import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from './components/Header'

import {Home} from './pages/Home'

function App() {
  return (
    <Router>
      {/* <Header/> */}

      <div className="App">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
      </div>




    </Router>
  );
}

export default App;
