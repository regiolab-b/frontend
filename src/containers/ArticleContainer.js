import React, { useEffect, useState } from 'react';
import { articlesApi, apiConfig, accessTokenApi } from '../services/rnApi';

export const ArticleContainer = () => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        articlesApi.getRecommendedArticles().then(data => setArticle(data.data)).catch((error) =>{
            console.log(error.response.status)
            if (error.response.status === 401) {
                accessTokenApi.getAccessToken().then((response)=> {
                    apiConfig.accessToken = response.data.accessToken
                    window.localStorage.setItem('access_token', response.data.accessToken);
                })
            }
            //restart function
        })  
    }, []);

    return (
        <div>
            {articles.map((article, index) => (
                <>
                <h1>{article.headline}</h1>
                <p>{article.lead}</p>
                </>
            ))}
        </div>
    )
}   