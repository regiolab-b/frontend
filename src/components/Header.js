import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
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
              <Link to={'/history'} class="nav-link" >History</Link>
            </li>    
          </ul>
        </div>  
      </nav>
  )
}

