import React, { useEffect, useState } from 'react';
import { historyApi, apiConfig, accessTokenApi } from '../services/rnApi';
import { Link, useParams } from "react-router-dom";

export const LikeDislikeContainer = () => {

    const [articles, setArticle] = useState([]);
    const { id } = useParams();

    const updateArticles = () => {
        historyApi.getHistory().then(data => {
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return articles.map((article, index) => (
                <div class="container pt-2">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title"><Link to={`/articles/${article._id}`}> {article.headline} </Link></h5>
                                    <p class="card-text">{article.lead}</p>
                                    {console.log(article.liked)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
)
}