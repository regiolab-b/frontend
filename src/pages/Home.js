import React from 'react'
import { ArticleContainer } from '../containers/ArticleContainer'
import { ControlledCarousel } from '../Carousel/Carousel'
import {SwipeTutorial} from '../components/SwipeTutorial'

export const Home = () => {
    return (
        <div>
            <div className="line">
            <ControlledCarousel/>
            </div>
            <div>
                <SwipeTutorial/>
            </div>
                

            <div class="header-home">
                <h2>Recent nieuws</h2>
            </div>
            <ArticleContainer amount={50} />
        </div>
    )
}
