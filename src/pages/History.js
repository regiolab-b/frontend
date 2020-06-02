import React from 'react';
import { useParams, Link} from 'react-router-dom';
//import { articlesApi, apiConfig, accessTokenApi } from '../services/rnApi';
import '../App.css';
import { LikeDislikeContainer } from '../containers/LikeDislikeContainer'

export const History = () => {
  return (
    <div>
        <div className="button">
            <Link to={'/'} class="nav-link" > Go Back </Link>
        </div>

        <div class="header-history">
            <h2>History</h2>
        </div>
        <div class="text-history">
          <h7>Dit zijn uw recent gelikete artikelen</h7>
        </div>
        <div className="liked-articles">

        <LikeDislikeContainer/>
        <LikeDislikeContainer/>
        <LikeDislikeContainer/>

        </div>
        <div class="text-history">
          <h7>Dit zijn uw recent gedislikete artikelen</h7>
        </div>
        <div className="liked-articles">

        <LikeDislikeContainer/>
        <LikeDislikeContainer/>
        <LikeDislikeContainer/>

        </div>
    </div>

)
}
