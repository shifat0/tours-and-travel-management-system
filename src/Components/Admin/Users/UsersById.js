import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import AdminNav from "../AdminNav";

const UsersById = () => {
  const [userById, setUserById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => res.json())
      .then((payload) => setUserById(payload));
  }, []);

  return (
    <>
      <AdminNav />
      <div className="m-2">
        <h1>{userById.name}</h1>
        <h6>{userById.email}</h6>
        <ListGroup className="mt-3">
          <ListGroup.Item>Mobile No. : {userById.phone}</ListGroup.Item>
          <ListGroup.Item>City : {userById.city}</ListGroup.Item>
          <ListGroup.Item>Country: {userById.country}</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default UsersById;
