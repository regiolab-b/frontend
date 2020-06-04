import React, { useEffect, useState } from 'react';
import { historyApi, apiConfig, accessTokenApi } from '../services/rnApi';
import { Link, useParams } from "react-router-dom";
import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

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

    const [gone] = useState(() => new Set())
    const [cards, setCards] = useSprings(articles.length, i => ({ x: 0, y: 0 }))
    
    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = mx > 200 || mx < -200
        if (!down && trigger) {
            gone.add(index)
            historyApi.deleteHistoryItem(articles[index]._id) //Dislike article when swiped
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
        <animated.div class="animated-card" key={index} style={ {x: cards[index].x, y: cards[index].y, 'max-height': cards[index].height} }>
            <animated.div {...bind(index)} >
                    <div class="container pt-2">
                        <div class="row">
                            <div class="col">
                                <div class={`card ${article.liked ? 'liked' : 'disliked'}`}>
                                    <div class="card-body">
                                        <h5 class="card-title"><Link to={`/articles/${article._id}`}> {article.headline} </Link></h5>
                                        <p class="card-text">{article.lead}</p>
                                        <p class="card-text">{article.pubDate}</p>
                                        <button type="button" class={`button ${article.liked ? 'liked' : 'disliked'}`}></button>
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