import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Navbar";
import Cards from "./Cards";
import Carousell from "./Carousel";

function Home() {
  return (
    <>
      <Nav />
      <Carousell />
      <Container>
        <Link to="/hotels" className="d-grid gap-2">
          <Button className="mt-3" size="lg">
            Book Hotels Now !
          </Button>
        </Link>
        <Cards />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
