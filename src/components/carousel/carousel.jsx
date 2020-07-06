import React, { Component } from "react";

// import Carousel from "nuka-carousel";
// Install it first!

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class CarouselMapped extends Component {
  render() {
    return (
      <Carousel
        wrap={false}
        pause={false}
        indicators={false}
        interval="3000"
        controls={false}
      >
        <Carousel.Item>
          <Image
            fluid={true}
            src={require("../../assets/cp-carousel.png")}
            alt="Competitive Programming"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            fluid={true}
            src={require("../../assets/python-carousel.png")}
            alt="Competitive Programming"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            fluid={true}
            src={require("../../assets/cpp-carousel.png")}
            alt="Competitive Programming"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselMapped;

/*
<Carousel autoplay={true}>
  <img
    src={require("../../assets/cp-carousel.png")}
    alt="Competitive Programming"
  />
  <img
    src={require("../../assets/python-carousel.png")}
    alt="Competitive Programming"
  />
  <img
    src={require("../../assets/cpp-carousel.png")}
    alt="Competitive Programming"
  />
</Carousel>
*/
