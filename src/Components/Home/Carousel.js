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
          <h3>Sajek Valley</h3>
          <p>
            Sajek Tripuri Valley is one of the most popular tourist spots in
            Bangladesh situated among the hills of the Kasalong range of
            mountains in Sajek union, Baghaichhari Upazila in Rangamati
            District.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider"
          src={bandarban}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Bandarban</h3>
          <p>
            Bandarban Hill District is the most remote and least populated
            district in Bangladesh.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider"
          src={saintmartin}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Saintmartin</h3>
          <p>
            St. Martin is generally known as “Narikel Zinzira” in Bengali, means
            'Coconut Island' and this is the only coral reef island in
            Bangladesh.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousell;
