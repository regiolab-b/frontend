import React, { useEffect, useState } from 'react';
import { articlesApi, apiConfig, accessTokenApi, dateDisplayOptions } from '../services/globalVariables';
import { Link } from "react-router-dom";
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

export const ArticleContainer = (props) => {
    const [articles, setArticles] = useState([]);
    
    const updateArticles = () =>{
        articlesApi.getRecommendedArticles(props.amount).then(data => setArticles(data.data)).catch((error) =>{
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

    const [gone] = useState(() => new Set())
    const [cards, setCards] = useSprings(articles.length, i => ({ x: 0, y: 0 }))
    
    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = mx > 200 || mx < -200
        if (!down && trigger) {
            gone.add(index)
            articlesApi.dislikeArticle(articles[index]._id) //Dislike article when swiped
        }

        setCards((i) => {
            if (index !== i) return

            const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
            const height = isGone ? 0 : undefined
            return { x , height}
        })
    })
        return articles.map((article, index) => (
                    <animated.div class="animated-card" key={index} style={ {x: cards[index].x, y: cards[index].y, maxHeight: cards[index].height} }>
                        <animated.div {...bind(index)} >
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
                        </animated.div>
                    </animated.div>
                )
        )
}   