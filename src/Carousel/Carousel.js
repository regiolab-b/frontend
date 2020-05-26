import React, { useState,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap';

export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgo.rgcdn.nl/dbefb3be3cba43c6907b22893c8830d8/opener/Burgemeester-Eddy-Bilder-over-de-gevolgen-van-de-corona-uitbraak-in-Zwartewaterland.jpg?v=ohtV25_oR68SONYEtnLbmA2"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgo.rgcdn.nl/dbefb3be3cba43c6907b22893c8830d8/opener/Burgemeester-Eddy-Bilder-over-de-gevolgen-van-de-corona-uitbraak-in-Zwartewaterland.jpg?v=ohtV25_oR68SONYEtnLbmA2"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgo.rgcdn.nl/dbefb3be3cba43c6907b22893c8830d8/opener/Burgemeester-Eddy-Bilder-over-de-gevolgen-van-de-corona-uitbraak-in-Zwartewaterland.jpg?v=ohtV25_oR68SONYEtnLbmA2"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
