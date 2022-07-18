import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import Nav from "../Navbar/Navbar";
import Cards from "./Cards";
import Carousell from "./Carousel";

function Home() {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
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
    </>
  );
}

export default Home;
