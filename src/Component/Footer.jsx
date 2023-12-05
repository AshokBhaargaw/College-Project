import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../New Images/Logo/White-bg-removebg-preview.png";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div style={{ backgroundColor: "#fff3cd99" }} className="mt-4 py-3">
        <Container>
          <Row className="">
            <Col xs={12} sm={6} md={4} lg={3} className="text-center">
              <img src={logo} alt="logo" className="img-fluid" width={150} />
              <p>
                <h4>The Best Hotel in Jodhpur</h4>
              </p>
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="justify-content-center"
            >
              <h5 className="ms-5 mt-3">Navigation Links</h5>
              <ul
                className="p-0 ms-5 footer-Nav-ul"
                style={{ marginTop: "38px" }}
              >
                <li>
                  <Link className="Nav" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="Nav" to={"/gallery"}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="Nav" to={"/about"}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="Nav" to={"/contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="justify-content-center"
            >
              <Link to={"/contact"} className="Nav">
              <h5 className="ms-5 mt-3">Contact US</h5>
              </Link>
              <ul
                className="p-0 ms-5"
                style={{ listStyle: "none" }}
              >
                <li>New yark 1002 , us</li>
                <li>
                  {" "}
                  <a href="#" className="a">
                    KAS@kashotels.com
                  </a>
                </li>
                <li>+ 7878456665</li>
                <li>+ 5656666777</li>
              </ul>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="justify-content-center"
            >
              
                <h5 className="ms-5 mt-3">Social Media</h5>
             
              <ul
                className="p-0 ms-5"
                style={{ listStyle: "none", marginTop: "38px" }}
              >
                <li>
                  {" "}
                  <a href="https://instagram.com" target="_blank" className="a ">
                    <AiOutlineInstagram className="me-2 fs-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://fb.com/" target="_blank" className="a">
                    <AiFillFacebook className="me-2 fs-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="wa.link/4y1os0" className="a">
                    <AiOutlineWhatsApp className="me-2 fs-4" />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" target="_blank" className="a">
                    <AiFillTwitterCircle className="me-2 fs-4" />
                    Twitter
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
    </div>
  );
}
