import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { LikeDislikeContainer } from '../containers/LikeDislikeContainer'
import { ClearHistory } from '../components/ClearHistory'

export const History = () => {
  return (
    <div>
        <div className="button">
            <Link to={'/'} class="nav-link" > Go Back </Link>
        </div>

        <div class="header-history">
            <h2>Geschiedenis</h2>
        </div>
        <div class="container">

        <div class="text-history">
          <p>Dit zijn uw recent gelezen en verwijderde artikelen</p>
        </div>
        <div className="liked-articles">
        </div>
        <LikeDislikeContainer/>
        </div>
        <ClearHistory/>
    </div>

)
}
