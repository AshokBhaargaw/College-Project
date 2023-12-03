import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Footer from "./Footer";
import HeritageHoteJodhpur from "../New Images/Heritage-Jodhpur/haritage-hotel-jodhpur 1500x600.jpeg";

const Contact = () => {
  const handleReservationSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };
  return (
    <>
      <div className="ContactFormHeroImage">
        <img src={HeritageHoteJodhpur} alt="HeritageHoteJodhpur" />
      </div>
      <Container className="ContactFormContainer">
        <Form onSubmit={handleReservationSubmit}>
          <Row className="Row">
            <Col className="Col">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col className="Col">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row className="Row">
            <Col className="Col">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
            <Col className="Col">
              <Form.Label>Mobile Number(Optional)</Form.Label>
              <Form.Control type="mobile" placeholder="Mobile Number" />
            </Col>
          </Row>
          <Row className="Row">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter you message here: </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Row>
          <Row className="Row">
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
