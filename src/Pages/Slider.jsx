import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel showThumbs={false} style={{background:"red"}}>
      <div>
        <img src="carousel1.webp" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="carousel2.webp" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="carousel3.webp" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="carousel4.webp" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
      <div>
        <img src="carousel5.webp" />
        {/* <p className="legend">Legend 5</p> */}
      </div>
      <div>
        <img src="carousel6.webp" />
        {/* <p className="legend">Legend 6</p> */}
      </div>
      <div>
        <img src="carousel7.webp" />
        {/* <p className="legend">Legend 7</p> */}
      </div>
    </Carousel>
  );
};

export default Slider;
