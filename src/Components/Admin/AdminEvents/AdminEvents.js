import React, { useState, useEffect } from "react";
import AdminNav from "../AdminNav";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/events")
      .then((res) => res.json())
      .then((payload) => setEvents(payload));
  }, []);

  const deleteEvent = (id) => {
    fetch(`http://localhost:5000/api/v1/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((payload) => console.log(payload.message));
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <AdminNav />
      <h1 className="text-center text-success">
        Total Events Count : {events.length}
      </h1>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Event-Name</th>
            <th>Place</th>
            <th>Fee</th>
          </tr>
        </thead>
        {events.map((event) => {
          const url = `/admin/events/${event.id}`;
          return (
            <tbody key={event.id}>
              <tr>
                <td>
                  <Link to={url}> {event.id} </Link>
                </td>
                <td>{event.eventName}</td>
                <td>{event.place}</td>
                <td>{event.fee}</td>
                <td>
                  {" "}
                  <Button
                    onClick={() => deleteEvent(event.id)}
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

export default AdminEvents;
