import React, { useEffect, useState } from 'react';
import { articlesApi, apiConfig, accessTokenApi, dateDisplayOptions } from '../services/rnApi';
import { useParams, Link } from "react-router-dom";

export const RecommendedContainer = () => {
    const [articles, setArticle] = useState([]);
    const { id } = useParams();

    const updateArticles = () => {
        articlesApi.getRecommendedArticles(5).then(data => {
            // Filter out article with the same id as this page
            const filteredData = data.data.filter(article => article._id !== id)
            setArticle(filteredData)
        }).catch((error) =>{
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
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div class="">
            {articles.map((article, index) => (
                <>  
                <div class="container pt-2">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><Link to={`/articles/${article._id}`} style={{ textDecoration: 'none', color: 'black', }}> {article.headline} </Link></h5>
                                    <p class="card-text">{article.lead}</p>
                                    <p class="card-text">{new Date(article.pubDate).toLocaleDateString('NL', dateDisplayOptions)}</p>
                                    <button type="button" class="btn btn-warning"><Link to={`/articles/${article._id}`} style={{ textDecoration: 'none', color: 'black'}}> Read more </Link></button>
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

