import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Navbarr from "../Navbar/Navbar";
import Cards from "../Home/Cards";
import Footer from "../Footer/Footer";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/events")
      .then((res) => res.json())
      .then((payload) => setEvents(payload));
  }, []);

  return (
    <div>
      <Navbarr />

      <h1 className="text-center text-success m-3">Events</h1>
      {events.map((event) => {
        return (
          <Card
            className="m-auto mb-5"
            key={event.id}
            style={{
              width: "25rem",
            }}
          >
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.eventName}</Card.Title>
              <Card.Subtitle className="text-muted">
                {event.place}
              </Card.Subtitle>
              <Card.Text className="mt-3">{event.description}</Card.Text>
              <ListGroup>
                <ListGroupItem>Event Fee: {event.fee}</ListGroupItem>
                <ListGroupItem>
                  {" "}
                  Event Date: {event.startingDate} To {event.endDate}
                </ListGroupItem>
              </ListGroup>
              <Card.Link as={Link} to={`/event-booking/${event.id}`}>
                Book Now!
              </Card.Link>
            </Card.Body>
          </Card>
        );
      })}
      <Footer />
    </div>
  );
}

export default Events;
