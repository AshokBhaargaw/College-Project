import React from "react";
import { Nav, Button, Form,  Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../New Images/Logo/Final-logo.png";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{ width: "100%" }}>
          <div className="navstyle">
            <div>
              <Navbar.Brand href="#home">
                <img src={logo} className="logo" />
              </Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{ marginLeft: "250px" }}>
                  <Link to={"/"} className="Nav">
                    Home
                  </Link>
                  <Link to={"/gallery"} className="Nav">
                    Gallery
                  </Link>
                  <Link to={"/about"} className="Nav">
                    About Us
                  </Link>
                  <Link to={"/contact"} className="Nav">
                    Contact
                  </Link>
                  {/* <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link to={"/about"}>About Us</Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="Search-bar">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
