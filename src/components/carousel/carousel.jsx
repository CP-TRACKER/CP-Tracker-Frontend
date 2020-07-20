import React, { Component } from "react";

import { Container, Image, Carousel } from "react-bootstrap";

class CarouselMapped extends Component {
  render() {
    return (
      <Container>
        <Carousel interval={2000}>
          <Carousel.Item>
            <Image
              className="w-100"
              src={require("../../assets/img1-carousel.svg")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="w-100"
              src={require("../../assets/img2-carousel.svg")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="w-100"
              src={require("../../assets/img3-carousel.svg")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselMapped;
