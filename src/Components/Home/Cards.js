import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import sajek from "../../images/sajek.jpg";
import saintmartin from "../../images/saintmartin.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/events")
      .then((res) => res.json())
      .then((payload) => setEvents(payload));
  }, []);

  return (
    <>
      <section className="mt-4 p-4 bg-secondary">
        <h1 className="text-center">Upcoming Events</h1>
        {events.slice(-2).map((event) => {
          return (
            <Card className="m-3" key={event.id}>
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
                <Card.Link as={Link} to="/event/booking">
                  Book Now!
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
        <Link to="/events">
          <Button className="m-auto d-block">See More Events</Button>
        </Link>
      </section>
      <section className="mt-4">
        <h1 className="text-success text-center">Read Blogs</h1>
        <CardGroup>
          <Card>
            <Card.Header>Card Header</Card.Header>
            <Card.Img variant="top" src={sajek} />
            <Card.Body>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>

              <Card.Link as={Link} to="/blogs">
                read more ...
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Card Header</Card.Header>
            <Card.Img variant="top" src={saintmartin} />
            <Card.Body>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>

              <Card.Link as={Link} to="/blogs">
                read more ...
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
    </>
  );
};

export default Cards;
