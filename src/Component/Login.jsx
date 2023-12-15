import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Form className="LoginForm">
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
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
      </Form>
    </>
  );
}
