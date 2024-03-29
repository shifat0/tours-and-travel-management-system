import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbarr = () => {
  const token = sessionStorage.getItem("token");
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} style={{ maxWidth: "130px", padding: "1rem" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav activeKey={location.pathname}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/hotels">
              Hotels
            </Nav.Link>

            <Nav.Link as={Link} to="/events">
              Events
            </Nav.Link>

            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            {token ? (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-success" size="sm">
                  Login
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
