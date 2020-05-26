import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articlesApi, apiConfig, accessTokenApi } from '../services/rnApi';

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
            <h1>{ article.headline }</h1>
            <div dangerouslySetInnerHTML={{__html: article.body}}></div>
        </div>
    )
}
