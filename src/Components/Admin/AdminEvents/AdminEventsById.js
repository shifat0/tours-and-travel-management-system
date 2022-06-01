import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroup, Image } from "react-bootstrap";
import AdminNav from "../AdminNav";

function AdminEventsById() {
  const [eventById, seteventById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/events/${id}`)
      .then((res) => res.json())
      .then((payload) => seteventById(payload));
  }, []);

  return (
    <>
      <AdminNav />
      <div className="m-2">
        <h1>{eventById.name}</h1>
        <h6>{eventById.email}</h6>
        <ListGroup className="mt-3">
          <ListGroup.Item>Event-Name : {eventById.eventName}</ListGroup.Item>
          <ListGroup.Item>Place : {eventById.place}</ListGroup.Item>
          <ListGroup.Item>Description {eventById.description}</ListGroup.Item>
          <ListGroup.Item>Fee : {eventById.fee}</ListGroup.Item>
          <ListGroup.Item>
            Starting Date : {eventById.startingDate}
          </ListGroup.Item>
          <ListGroup.Item>End Date : {eventById.endDate}</ListGroup.Item>
          <ListGroup.Item>
            {" "}
            Image : <Image fluid src={eventById.image} alt={eventById.place} />
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default AdminEventsById;
