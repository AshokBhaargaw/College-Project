import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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

import HotelImage1 from "../New Images/Heritage-Jodhpur/Haritage-hotel .jpeg";
import HotelImage2 from "../New Images/Heritage-Jodhpur/Haritage-hotel.jpeg";
import HotelImage3 from "../New Images/Heritage-Jodhpur/Heritage-Hotels-in-Jodhpur.jpg";
import HotelImage4 from "../New Images/Heritage-Jodhpur/haritage-hotel-jodhpur 1500x600.jpeg";
import HotelImage5 from "../New Images/Heritage-Jodhpur/haritage-hotel-jodhpur.jpeg";
import HotelImage6 from "../New Images/Heritage-Jodhpur/heritage 430x286.jpeg";
import HotelImage7 from "../New Images/Heritage-Jodhpur/Haritage-hotel .jpeg";
import HotelImage8 from "../New Images/Heritage-Jodhpur/Haritage-hotel.jpeg";

import Gym1 from "../New Images/Gym/Gym (1).jpg";
import Gym2 from "../New Images/Gym/Gym (2).jpg";
import Gym3 from "../New Images/Gym/Gym (3).jpg";
import Gym4 from "../New Images/Gym/Gym (4).jpg";

const Gallery = () => {
  return (
    <>
      <Container>
        <div className="Section">
          <Row>
            <h3>Hotel:</h3>
          </Row>
          <Row>
            <Row className="GridStyle">
              <Col xs lg="5">
                <img src={HotelImage3} />
              </Col>
              <Col>
                <img src={HotelImage4} />
              </Col>
            </Row>
            <Row className="GridStyle">
              <Col>
                <img src={HotelImage3} />
              </Col>
              <Col>
                <img src={HotelImage8} />
              </Col>
              <Col>
                <img src={HotelImage6} />
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <Col></Col>
            </Row>
          </Row>
        </div>
        <hr />
        <div className="Section">
          <Row>
            <h3>GYM:</h3>
          </Row>
          <Row>
            <Row className="GridStyle">
              <Col xs lg="5">
                <img src={Gym1} />
              </Col>
              <Col>
                <img src={Gym2} />
              </Col>
            </Row>
            <Row className="GridStyle">
              <Col>
                <img src={Gym3} />
              </Col>
              <Col lg="5">
                <img src={Gym4} />
              </Col>
            </Row>
          </Row>
        </div>
      </Container>


{/*       
      <hr />
      <div className="container">
        <h1>Gallery images</h1>
        <Row style={{ justifyContent: "space-between" }}>
          <Col>
            <img
              style={{ borderRadius: "10px", width: "800px", height: "450px" }}
              src={HotelImage1}
            />
          </Col>
          <Col style={{ textAlign: "end", width: "100%" }}>
            <img
              src={HotelImage2}
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
              src={HotelImage3}
              height={370}
              width={500}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col>
            <img
              src={HotelImage4}
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
                src={HotelImage5}
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
      </div> */}
      <Footer />
    </>
  );
};

export default Gallery;
