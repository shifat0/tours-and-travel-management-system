import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";

function DashboardBody() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav
            variant="pills"
            className="flex-column"
            style={{ cursor: "pointer" }}
          >
            <Nav.Item>
              <Nav.Link eventKey="first">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled">Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">first</Tab.Pane>
            <Tab.Pane eventKey="second">second</Tab.Pane>
            <Tab.Pane eventKey="disabled">disabled</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default DashboardBody;
