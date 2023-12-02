import React from "react";
import { Col, Row } from "react-bootstrap";
import image from "../Images/images.jpeg";
import logo from "../Images/logo 1.png";
import img1 from "../Images/beach-hotel.jpg";
import img2 from "../Images/hotels.jpg";
import img3 from "../Images/photo.jpg";
import img4 from "../Images/a2x2kd.jpg";
import img5 from "../Images/mast.jpg";
import img6 from "../Images/chef.jpg";
import img7 from "../Images/hotel-1640201_1280.jpg";
import img8 from "../Images/bedroom-490779_640.jpg";
import img9 from "../Images/bedroom-5664221_640.jpg";
import img10 from "../Images/room.webp";
import img11 from "../Images/464303942.jpg";
import img12 from "../Images/images (4).jpeg";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <>
      <div className="container">
        <h1>Gallery images</h1>
        <Row style={{ justifyContent: "space-between" }}>
          <Col>
            <img
              style={{ borderRadius: "10px", width: "800px", height: "450px" }}
              src={img1}
            />
          </Col>
          <Col style={{ textAlign: "end", width: "100%" }}>
            <img
              src={img2}
              b
              width={450}
              height={450}
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Col>
            <img
              src={img6}
              height={370}
              width={500}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col>
            <img
              src={img4}
              height={370}
              width={700}
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <div style={{ marginTop: "80px", justifyContent: "space-between" }}>
          <Row>
            <Col>
              <img
                src={img3}
                height={350}
                width={400}
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col>
              <img
                src={img5}
                height={350}
                width={400}
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col>
              <img
                src={img7}
                height={350}
                width={400}
                style={{ borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <img
                src={img8}
                height={350}
                width={400}
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col>
              <img
                src={img9}
                height={350}
                width={400}
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col>
              <img
                src={img10}
                height={350}
                width={400}
                style={{ borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: "70px" }}>
          <Row>
            <Col>
              <img
                src={img11}
                height={350}
                width={600}
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col>
              <img
                src={img12}
                height={350}
                width={627}
                style={{ borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
        <Footer/> 
    </>
  );
};

export default Gallery;
