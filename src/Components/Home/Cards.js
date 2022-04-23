import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import sajek from "../../images/sajek.jpg";
import saintmartin from "../../images/saintmartin.jpg";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <section className="mt-4">
        <h1 className="text-success text-center">Upcoming Events</h1>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={sajek} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>

              <Card.Link as={Link} to="/events">
                see more ...
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={saintmartin} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>

              <Card.Link as={Link} to="/events">
                see more ...
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
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
