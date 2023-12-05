import React from "react";
import { Nav, Button, Form, Navbar, Container } from "react-bootstrap";
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
            <div className="NavBar-Menu">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{ marginLeft: "280px" }}>
                  <Link to={"/"} className="Nav">
                    Home
                  </Link>
                  <Link to={"/gallery"} className="Nav">
                    Gallery
                  </Link>
                  <Link to={"/services"} className="Nav">
                    Services
                  </Link>
                  <Link to={"/contact"} className="Nav">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="NavBar-Button">
              <Link to={"/signup"}>
                <Button>SignUp</Button>
              </Link>
              <Link to={"/login"}>
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
