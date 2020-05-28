import React, { useEffect, useState } from 'react';
import { articlesApi, apiConfig, accessTokenApi } from '../services/rnApi';
import { Link } from "react-router-dom";

export const ArticleContainer = () => {
    const [articles, setArticle] = useState([]);

    const updateArticles = () =>{
        articlesApi.getRecommendedArticles().then(data => setArticle(data.data)).catch((error) =>{
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
    }, );

    return (
        <div class="">
            {articles.map((article, index) => (
                <>  
                <div class="container pt-2">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><Link to={`/articles/${article._id}`}> {article.headline} </Link></h5>
                                    <p class="card-text">{article.lead}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}   