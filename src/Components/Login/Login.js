import React, { useContext, useState } from "react";
import Navbarr from "../Navbar/Navbar";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((payload) => {
        setLoggedInUser(payload);
        if (payload.token) sessionStorage.setItem("token", payload.token);
        if (payload.token) return navigate(from, { replace: true });
      });
  };

  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <Navbarr />
      <Form className="w-50 mt-5 m-auto text-center" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            name="password"
            placeholder="Password"
            required
            min="6"
            max="16"
            onBlur={handleBlur}
          />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        <p className="text-danger">{loggedInUser.message}</p>
        <Button
          className="mt-3"
          type="submit"
          size="lg"
          variant="outline-primary"
        >
          Login
        </Button>
        <p className="mt-2">
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Signup</span>
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Login;
