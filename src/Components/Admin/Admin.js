import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

const Admin = () => {
  const [response, setResponse] = useState({});
  const [setLoggedInUser] = useContext(userContext);
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  let { from } = { from: { pathname: "/admin/users" } };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/v1/users/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: admin.email,
        password: admin.password,
      }),
    })
      .then((res) => res.json())
      .then((payload) => {
        setResponse(payload);
        sessionStorage.setItem("token", JSON.stringify(payload.token));
        if (payload.token) return navigate(from, { replace: true });
        return payload.isAdmin ? setLoggedInUser(payload) : null;
      });
  };

  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };

  return (
    <div>
      <Form className="w-50 mt-5 m-auto text-center" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
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
            onBlur={handleBlur}
          />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        {response.isAdmin ? null : (
          <p className="text-danger">{response.message}</p>
        )}
        <Button className="mt-3" type="submit" size="lg">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Admin;
