import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarr from "../Navbar/Navbar";
import { userContext } from "../../App";
import PostBlogs from "./PostBlogs";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const handleClick = () => {
    sessionStorage.clear("token");
  };
  return (
    <>
      <Navbarr />
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="mt-5">Name: {loggedInUser.name}</h1>
            <h4>E-mail: {loggedInUser.email}</h4>
          </div>
          <Link to="/login">
            <Button
              className="mt-5"
              onClick={handleClick}
              variant="outline-danger"
              size="sm"
            >
              Logout
            </Button>
          </Link>
        </div>
        <PostBlogs />
      </Container>
    </>
  );
};

export default Profile;
