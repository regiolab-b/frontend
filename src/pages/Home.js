import React from 'react'
import { ArticleContainer } from '../containers/ArticleContainer'
import { ControlledCarousel } from '../Carousel/Carousel'

export const Home = () => {
    return (
        <div>
            <ControlledCarousel/>
            <br/>
            <ArticleContainer />
        </div>
    )
}
