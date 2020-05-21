import React from 'react';
import {Navbar} from './Navbar';
import { Router } from 'react-router-dom';


export class Header extends React.Component {
    render() {
        return (
                <div className="header">
                  <div className="title">
                    <h1>Regiolab</h1>
                    <Navbar/>
                  </div>
                </div>
              );
    }
}

export default Header;