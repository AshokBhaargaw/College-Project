import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer";
import HotelRommVideo from "../New Images/Video/HotelRoom.mp4";
import RestorentClip from "../New Images/Video/Restorent.mp4";
import GYMClip from "../New Images/Video/GymClip.mp4";

const Services = () => {
  return (
    <>
      <Container>
        {/* ------------------- Section One -------------------------  */}
        <Row className="ServicesPageSections">
          <Col className="DetailsPart">
            <h3>
              <b>1.</b> Rooms
            </h3>
            <p>
              We have <b> Best Rooms </b> <br /> on <b> Affordable Prices </b>{" "}
              <br />
              with <b>Great Room Services. </b>
            </p>
          </Col>
          <Col>
            <video src={HotelRommVideo} muted autoPlay loop width={650} />
          </Col>
        </Row>

        {/* ------------------- Section Two -------------------------  */}

        <Row className="ServicesPageSections">
          <Col>
            <video src={RestorentClip} muted autoPlay loop width={650} />
          </Col>
          <Col className="DetailsPart">
            <h3>
              <b>2.</b> Restorent
            </h3>
            <p>
              We provide <b> Best Food </b> <br /> with <b> Best Hygiene </b>{" "}
              <br />
              <br /> We focuc to provide you <br /> <b>Best Experience</b>
            </p>
          </Col>
        </Row>

        {/* ------------------- Section Three -------------------------  */}
        <Row className="ServicesPageSections">
          <Col className="DetailsPart">
            <h3>
              <b>3.</b> GYM
            </h3>
            <p>
              Empower your stay with our fully-equipped gym, where fitness meets
              luxury for a revitalizing experience at our hotel.
            </p>
          </Col>
          <Col>
            <video src={GYMClip} muted autoPlay loop width={650} />
          </Col>
        </Row>



      </Container>
      <Footer />
    </>
  );
};

export default Services;
