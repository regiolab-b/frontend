import React, { useEffect, useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import { articlesApi, apiConfig, accessTokenApi } from '../services/rnApi';
import '../App.css';
import Image from 'react-bootstrap/Image'
import { RecommendedContainer } from '../containers/RecommendedContainer'
import { Timer } from '../functions/Timer'

export const Article = () => {
    const [article, setArticle] = useState([]);
    const { id } = useParams();

    const updateArticles = () => {
        articlesApi.getArticleDetails(id).then(data => setArticle(data.data)).catch((error) =>{
            console.log(error.response.status)
            if (error.response.status === 401) {
                accessTokenApi.getAccessToken().then((response)=> {
                    apiConfig.accessToken = response.data.accessToken
                    window.localStorage.setItem('access_token', response.data.accessToken);
                    updateArticles()
                })
            }
        })  
    }

    useEffect(() => {
        updateArticles()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <div>
            <Timer />
            <div className="button">
                <Link to={'/'} class="nav-link" > Go Back </Link>
            </div>
    

            <div className="header-picture">
                <Image src="https://dummyimage.com/hd1080" fluid />
            </div>

            <div className="date">
                <p1>{article.pubDate}</p1> 
            </div>

            <div class="header-detail">
                <h2>{ article.headline }</h2>
            </div>

            <br></br>

            <div class="container" dangerouslySetInnerHTML={{__html: article.body}}></div>
            <div class="recommended">
                <div class="header-recommended">
                    <h3>Recommended articles</h3>
                </div>
            </div>
            <RecommendedContainer/>

        </div>
    )
}
