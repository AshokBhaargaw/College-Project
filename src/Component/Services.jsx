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
              Indulge in unparalleled comfort and elegance in our hotel rooms,
              where every detail is meticulously curated to ensure a refined and
              relaxing stay.
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
              Savor exquisite flavors in a culinary journey at our hotel's
              restaurant, where each dish is crafted with passion, promising a
              delightful fusion of taste and ambiance.
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
