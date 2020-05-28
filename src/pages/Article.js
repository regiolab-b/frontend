import React, { useEffect, useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import { articlesApi, apiConfig, accessTokenApi } from '../services/rnApi';
import '../App.css';

export const Article = () => {
    const [article, setArticle] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        articlesApi.getArticleDetails(id).then(data => setArticle(data.data)).catch((error) =>{
            console.log(error.response.status)
            if (error.response.status === 401) {
                accessTokenApi.getAccessToken().then((response)=> {
                    apiConfig.accessToken = response.data.accessToken
                    window.localStorage.setItem('access_token', response.data.accessToken);
                })
            }
            //restart function
        })  
    }, [id]);

     
    
    return (
        <div>
            <div className="Button">
              <Link to={'/'} class="nav-link" > Go Back </Link>
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
        </div>
    )
}
