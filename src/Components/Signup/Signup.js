import React, { useState } from "react";
import Navbarr from "../Navbar/Navbar";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [response, setResponse] = useState({});
  const [validated, setValidated] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // validation checking
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    e.preventDefault();

    // posting new user data to database
    fetch("http://localhost:5000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        city: user.city,
        country: user.country,
      }),
    })
      .then((res) => res.json())
      .then((payload) => {
        setResponse(payload);
        if (payload.success) navigate("/login", { replace: true });
      });
  };

  const handleBlur = (e) => {
    // confirm password validation
    let password, confirmPassword;
    e.target.name === "password" ? (password = e.target.value) : null;
    e.target.name === "confirm-password"
      ? (confirmPassword = e.target.value)
      : null;
    password !== confirmPassword
      ? setConfirmPasswordErr("password dont match")
      : null;

    // storing valid user info to state
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <>
      <Navbarr />
      <Form
        className="w-50 mt-5 m-auto text-center"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <h1>Signup Form</h1>
        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            name="name"
            placeholder="name"
            required
            onBlur={handleBlur}
            pattern="^[a-zA-Z][a-zA-Z\\. ]+$"
          />
          <label htmlFor="floatingInputCustom">Name</label>
          <Form.Control.Feedback type="invalid">
            Enter a Name
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingInputCustom01"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            onBlur={handleBlur}
            pattern="^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$"
          />
          <label htmlFor="floatingInputCustom01">Email address</label>
          <Form.Control.Feedback type="invalid">
            Enter a valid email address || {response.message}
          </Form.Control.Feedback>
          <p className="text-danger">{response.message}</p>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingPasswordCustom02"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
            maxLength={16}
            onBlur={handleBlur}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,16}$"
          />
          <label htmlFor="floatingPasswordCustom02">Password</label>
          <Form.Control.Feedback type="invalid">
            Password must contain one letter, number, special character and must
            be 6-16 character long
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingPasswordCustom03"
            type="password"
            name="confirm-password"
            placeholder="confirm-Password"
            required
            minLength={6}
            maxLength={16}
            onBlur={handleBlur}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,16}$"
          />
          <label htmlFor="floatingPasswordCustom03">Confrim Password</label>
          <Form.Control.Feedback type="invalid">
            {confirmPasswordErr}
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingInputCustom03"
            type="text"
            name="phone"
            placeholder="+880"
            required
            onBlur={handleBlur}
            pattern="^(?:\+88|88)?(01[3-9]\d{8})$"
          />
          <label htmlFor="floatingInputCustom03">Phone Number</label>
          <Form.Control.Feedback type="invalid">
            Enter a valid phone number
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingInputCustom04"
            type="text"
            name="city"
            placeholder="Dhaka"
            required
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInputCustom04">City</label>
          <Form.Control.Feedback type="invalid">
            Enter the name of your city
          </Form.Control.Feedback>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3">
          <Form.Control
            id="floatingInputCustom05"
            type="text"
            name="country"
            placeholder="Bangladesh"
            required
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInputCustom05">Country</label>
          <Form.Control.Feedback type="invalid">
            Enter the name of your country
          </Form.Control.Feedback>
        </Form.Floating>

        <Button className="mt-3" type="submit" size="lg">
          Signup
        </Button>

        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </Form>
    </>
  );
};

export default Signup;
