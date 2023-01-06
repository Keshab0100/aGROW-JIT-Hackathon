import React from 'react'
import s3 from '../images/s3.jpg';
import s2 from '../images/s2.jpg';
import s4 from '../images/s4.jpg';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Loader() {
  return (
    <div name="carousel" className="carousel">

      <Carousel
        className="carousel"
        interval={2000}

        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={s2} alt="/" />
        </div>
        <div>
          <img src={s3} alt="/" />
        </div>
        <div>
          <img src={s4} alt="/" />
        </div>
      </Carousel>
    </div>
  );
}


export default Loader