import React, { Component } from "react";

import { Container, Image, Carousel } from "react-bootstrap";

class CarouselMapped extends Component {
  render() {
    return (
      <Container>
        <Carousel indicators={false} interval="2000" controls={false}>
          <Carousel.Item>
            <Image
              className="d-block"
              src={require("../../assets/cp-carousel.png")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={require("../../assets/python-carousel.png")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={require("../../assets/cpp-carousel.png")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselMapped;
