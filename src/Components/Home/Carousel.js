import React from "react";
import { Carousel } from "react-bootstrap";
import sajek from "../../images/sajek.jpg";
import bandarban from "../../images/bandarban.jpg";
import saintmartin from "../../images/saintmartin.jpg";

const Carousell = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 slider" src={sajek} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider"
          src={bandarban}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider"
          src={saintmartin}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousell;
