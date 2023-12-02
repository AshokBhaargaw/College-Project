import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Footer from "./Footer";

const Contact = () => {
  const handleReservationSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle the form submission (e.g., send data to a server)
    console.log("Form submitted!");
  };
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <h1 className="mb-4">Welcome to Grand Horizon Hotel</h1>
            <p>
              Grand Horizon Hotel is a sanctuary of sophistication, offering an
              immersive experience where luxury meets convenience. Our
              commitment to excellence ensures a stay beyond expectations.
            </p>
            <h2 className="mt-4">Services and Amenities</h2>
            <Row className="mb-4">
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="/path/to/room-image.jpg" />
                  <Card.Body>
                    <Card.Title>Luxurious Accommodations</Card.Title>
                    <Card.Text>
                      Immerse yourself in the opulence of our elegantly designed
                      rooms and suites.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="/path/to/dining-image.jpg" />
                  <Card.Body>
                    <Card.Title>Exquisite Dining</Card.Title>
                    <Card.Text>
                      Savor culinary delights crafted by our expert chefs in our
                      sophisticated dining spaces.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Img variant="top" src="/path/to/pool-image.jpg" />
                  <Card.Body>
                    <Card.Title>Relaxation and Recreation</Card.Title>
                    <Card.Text>
                      Rejuvenate in our serene spa, take a dip in our sparkling
                      pool, or stay fit in our modern fitness center.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/path/to/event-space-image.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Elegant Event Spaces</Card.Title>
                    <Card.Text>
                      Host memorable events in our versatile and beautifully
                      appointed event spaces.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <h2 className="mt-4">Spa and Wellness</h2>
            <p>
              Our spa is a haven of tranquility, offering a range of
              rejuvenating treatments and therapies to enhance your well-being.
            </p>
            <h2 className="mt-4">Corporate Events</h2>
            <p>
              Elevate your business events with our dedicated planning services
              and state-of-the-art facilities.
            </p>
            <h2 className="mt-4">Special Packages</h2>
            <p>
              Explore our exclusive packages designed to cater to different
              preferences, from romantic getaways to family vacations.
            </p>
            <h2 className="mt-4">Local Attractions</h2>
            <p>
              Immerse yourself in the local culture and attractions. Our
              concierge team can help you plan exciting excursions.
            </p>
            <h2 className="mt-4">Guest Reviews</h2>
            <Row>{/* Add a carousel or grid of guest reviews here */}</Row>
          </Col>
          <Col md={4}>
            <img
              src="/path/to/hotel-image.jpg"
              alt="Grand Horizon Hotel"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Make a Reservation</h2>
            <p>
              Plan your stay with us. Fill out the reservation form below, and
              our team will ensure a seamless and enjoyable experience during
              your time at Grand Horizon Hotel.
            </p>
            <Form onSubmit={handleReservationSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formCheckIn">
                <Form.Label>Check-in date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group controlId="formCheckOut">
                <Form.Label>Check-out date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Additional Requests</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Any special requests or preferences?"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Reservation
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Contact Information</h2>
            <p>
              We are here to assist you. For inquiries, reservations, or any
              special requests, please don't hesitate to reach out to our team.
            </p>
            <address>
              <strong>Grand Horizon Hotel</strong>
              <br />
              123 Main Street, [City]
              <br />
              [Your Country]
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <Button variant="primary" href="mailto:info@grandhorizonhotel.com">
              Email Us
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Location Map</h2>
            {/* Add an embedded map or link to your hotel's location on a map */}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Gallery</h2>
            {/* Add a gallery section showcasing images of the hotel, rooms, dining, etc. */}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2>Terms and Conditions</h2>
            {/* Add a section with the terms and conditions for booking and staying at the hotel */}
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
