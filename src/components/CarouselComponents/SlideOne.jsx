//Carousel
import Carousel from "react-bootstrap/Carousel";
import React from "react";

import ExamplePie from "../CarouselComponents/ExamplePie";
import ExampleBar from "../CarouselComponents/ExampleBar";

const SlideOne = ({ imageSrc, title, description }) => {
  return (
    <div className="carousel-item">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {<ExamplePie/>}
    </div>
  );
};

export default SlideOne;

