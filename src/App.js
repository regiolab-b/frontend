import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {Header} from './components/Header'

class App extends React.Component {
  render() {
    return (
    <Header></Header>

    );
  }
}

export default App;
