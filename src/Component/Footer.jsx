import React from 'react'
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import logo from "../Images/logo 1.png";
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
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{ width: "230px" }}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                distinctio necessitatibus atque, labore est animi soluta nobis
                beatae fuga voluptas accusamus repellat.
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="justify-content-center"
            >
              <h5 className="ms-5 mt-3">Usefull Links</h5>
              <ul
                className="p-0 ms-5"
                style={{ listStyle: "none", marginTop: "38px" }}
              >
                <li>
                  <a href="#" className="a">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    Contact us
                  </a>
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
              <h5 className="ms-5 mt-3">Contact</h5>
              <ul
                className="p-0 ms-5"
                style={{ listStyle: "none", marginTop: "38px" }}
              >
                <li>New yark 1002 , us</li>
                <li>
                  {" "}
                  <a href="#" className="a">
                    Example@gmail.com{" "}
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
              <h5 className="ms-5 mt-3">Contact</h5>
              <ul
                className="p-0 ms-5"
                style={{ listStyle: "none", marginTop: "38px" }}
              >
                <li>
                  {" "}
                  <a href="#" className="a ">
                    <AiOutlineInstagram className="me-2 fs-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    <AiFillFacebook className="me-2 fs-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
                    <AiOutlineWhatsApp className="me-2 fs-4" />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="a">
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
  )
}
