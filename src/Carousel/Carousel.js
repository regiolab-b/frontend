import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export const ControlledCarousel = () => {
  
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://imgo.rgcdn.nl/dbefb3be3cba43c6907b22893c8830d8/opener/Burgemeester-Eddy-Bilder-over-de-gevolgen-van-de-corona-uitbraak-in-Zwartewaterland.jpg?v=ohtV25_oR68SONYEtnLbmA2" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://imgg.rgcdn.nl/6194dcea731945e08bb14697835e2721/opener/Foto-ANP.jpg?v=7fB8rrIf06qef4JodDFLcg2" alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://imgg.rgcdn.nl/07662d4bb70348fc81311696c1777971/opener/Ook-echtgenoot-overleden-bij-frontale-botsing-Foto-Bart-Meesters-Meesters-Multi-Media.jpg?v=okzMDQMjN02y5-GAkqlrRw2" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
  }
  

  
