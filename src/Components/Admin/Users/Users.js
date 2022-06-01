import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users")
      .then((res) => res.json())
      .then((payload) => setUsers(payload));
  }, []);

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/api/v1/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((payload) => console.log(payload.message));
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <AdminNav />
      <h1 className="text-center text-success">
        Total Users Count : {users.length}
      </h1>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
          </tr>
        </thead>
        {users.map((user) => {
          const url = `/admin/users/${user.id}`;
          return (
            <tbody key={user.id}>
              <tr>
                <td>
                  <Link to={url}> {user.id} </Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {" "}
                  <Button
                    onClick={() => deleteUser(user.id)}
                    size="sm"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default Users;
