import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Form className="LoginForm" onSubmit={handleSubmit}>
        <Container>
          <Row>
            <label className="form-label" htmlFor="firstName">
              Email:
            </label>
            <div className="form-outline">
              <input
                type="email"
                id="LoginEmail"
                className="form-control form-control-lg"
              />
            </div>
          </Row>
          <Row>
            <label className="form-label" htmlFor="lastName">
              Password:
            </label>
            <div className="form-outline">
              <input
                type="password"
                id="LoginPassword"
                className="form-control form-control-lg"
              />
            </div>
          </Row>
          <Row className="mt-3">
            <div>
              <Link
                to={"/signup"}
                style={{
                  display: "block",
                  marginBottom: 20,
                  color: "white",
                  textDecoration: "none",
                }}
                className="hoverUnderline"
              >
                Click here to Sign up
              </Link>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Row>
        </Container>
      </Form>
    </>
  );
}
