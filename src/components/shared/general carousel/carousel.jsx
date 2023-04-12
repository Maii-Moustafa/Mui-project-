import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

import Carousel from "react-material-ui-carousel";
import CarouselItemItem from "./portfolioItem";

function MyCarousel({ slider, component }) {
  return (
    <Carousel style={{ position: "relative", width: "80%" }}>
      {slider.map((item, i) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default MyCarousel;
