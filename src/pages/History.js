import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { LikeDislikeContainer } from '../containers/LikeDislikeContainer'
import { ClearHistory } from '../components/ClearHistory'
import { AntiSwipeTutorial } from '../components/AntiSwipeTutorial'

export const History = () => {
  return (
    <div>
        <button type="button" class="btn btn-warning m-3"><Link to={'/'} style={{ textDecoration: 'none', color: 'black'}}> Terug </Link></button>


        <div class="header-history">
            <h2>Geschiedenis</h2>
        </div>
        <div class="container">

        <div class="text-history">
          <p>Dit zijn uw recent gelezen en verwijderde artikelen</p>
        </div>
        <div>
          <AntiSwipeTutorial/>
        </div>
        <LikeDislikeContainer/>
        </div>
        <ClearHistory/>
    </div>

)
}
