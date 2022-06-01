import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { userContext } from "../../App";

const AdminNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const handleClick = () => {
    sessionStorage.clear("token");
    setLoggedInUser({});
  };

  return (
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/admin/users">
          Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Admin</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              activeKey={location.pathname}
            >
              <Nav.Link as={Link} to="/admin/users">
                Users
              </Nav.Link>
              <NavDropdown title="Hotels" id="offcanvasNavbarDropdown">
                <NavDropdown.Item as={Link} to="/admin/hotels">
                  List of Hotels
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/hotels/post">
                  Post Hotels
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Events" id="offcanvasNavbarDropdown">
                <NavDropdown.Item as={Link} to="/admin/events">
                  List of Events
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/events/post">
                  Post Events
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/admin/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/admin">
                <Button
                  onClick={handleClick}
                  variant="outline-success"
                  size="sm"
                >
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default AdminNav;
