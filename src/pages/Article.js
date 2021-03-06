import React, { useEffect, useState} from 'react';
import { useParams, Link} from 'react-router-dom';
import { articlesApi, apiConfig, accessTokenApi, dateDisplayOptions } from '../services/globalVariables';
import '../App.css';
import { ArticleContainer } from '../containers/ArticleContainer'
import { Timer } from '../functions/Timer'

export const Article = () => {
    const [article, setArticle] = useState([]);
    const { id } = useParams();

    const updateArticle = () => {
        articlesApi.getArticleDetails(id).then(data => setArticle(data.data)).catch((error) =>{
            console.log(error.response.status)
            if (error.response.status === 401) {
                accessTokenApi.getAccessToken().then((response)=> {
                    apiConfig.accessToken = response.data.accessToken
                    window.localStorage.setItem('access_token', response.data.accessToken);
                    updateArticle()
                })
            }
        })  
    }

    useEffect(() => {
        updateArticle()
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <div>
            <Timer />
            <button type="button" class="btn btn-warning m-3"><Link to={'/'} style={{ textDecoration: 'none', color: 'black'}}> Terug </Link></button>

            <div className="date">
                <p>{new Date(article.pubDate).toLocaleDateString('NL', dateDisplayOptions)}</p>
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
            <ArticleContainer amount={5}/>

        </div>
    )
}
