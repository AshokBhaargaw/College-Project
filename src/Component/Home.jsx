import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import SearchOnCarousel from './Search'

import CarouselImage1 from "../New Images/Jodhpur-Hotels/FIJOHmNXIAobtEI.jpg";
import CarouselImage2 from "../New Images/Jodhpur-Hotels/radisson-jodhpur (4). pg.jpg";
import CarouselImage3 from "../New Images/Jodhpur-Hotels/bijolai-palace-a-inde (2).jpg";
import AboutDescImage from "../New Images/Jodhpur/varun-gaba-GkaKPn0wyz8-unsplash.jpg";
import RoomImage1 from "../New Images/Hotel-Rooms/1.jpg";
import RoomImage2 from "../New Images/Hotel-Rooms/2.jpg";
import RoomImage3 from "../New Images/Hotel-Rooms/3.jpg";
import RoomImage5 from "../New Images/Hotel-Rooms/4.jpg";
import RoomImage6 from "../New Images/Hotel-Rooms/5.jpg";
import RoomImage4 from "../New Images/Hotel-Rooms/6.jpg";
import HotelStaffImage from "../New Images/Other-Images/Hotel-staff.webp";
import HotelVideoClip from "../New Images/Videos/Hotel-clip.mp4";

function Home() {
  return (
    <div>
      <div className="Cont">
        <div className="checkinCheckoutdiv">
          <SearchOnCarousel/>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 slide "
              src={CarouselImage1}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={CarouselImage2}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={CarouselImage3}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ backgroundColor: "#E7E9EB", marginTop: "40px" }}>
        <Container>
          <Row>
            <Col style={{ marginTop: "40px" }}>
              <h2 style={{ width: "400px", fontFamily: "-moz-initial" }}>
                About the KAS Hotels and Suites
              </h2>
              <p style={{ width: "500px" }}>
                Explore Jodhpur's charming hotels on KAS Hotels! Find a perfect
                blend of comfort and tradition in every stay. Immerse yourself
                in the vibrant culture of the Blue City while enjoying top-notch
                amenities. Your journey to Jodhpur begins with us, offering
                unique and delightful accommodation experiences. Book now for a
                royal and memorable stay!
              </p>
              <b>Have a royal time with us!</b>
            </Col>
            <Col className="text-center">
              <img
                src={AboutDescImage}
                className="Imgset-2 "
                style={{ borderRadius: "30px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* --------------  Rooms and Suites -------------------- */}

      <div style={{ marginTop: "40px" }}>
        <Container>
          <h2>Rooms and Suites</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="cart">
              <img src={RoomImage1} className="Imgset" />
              <p className="wt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis expedita voluptas dolores aliquid praesentium laboriosam,
                error veniam sint quis accusamus maxime, eaque voluptates
                accusantium assumenda .
              </p>
              <Button
                variant="outline-danger"
                style={{ marginLeft: "50%", transform: "translate(-50%)" }}
                className="bt"
              >
                Book Now
              </Button>
            </div>
            <div className="cart">
              <img src={RoomImage2} className="Imgset" />
              <p className="wt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis expedita voluptas dolores aliquid praesentium laboriosam,
                error veniam sint quis accusamus maxime, eaque voluptates
                accusantium assumenda .
              </p>
              <Button
                variant="outline-danger"
                style={{ marginLeft: "50%", transform: "translate(-50%)" }}
                className="bt"
              >
                Book Now
              </Button>
            </div>

            <div className="cart">
              <img src={RoomImage3} className="Imgset" />
              <p className="wt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis expedita voluptas dolores aliquid praesentium laboriosam,
                error veniam sint quis accusamus maxime, eaque voluptates
                accusantium assumenda .
              </p>
              <Button
                variant="outline-danger"
                style={{ marginLeft: "50%", transform: "translate(-50%)" }}
                className="bt"
              >
                Book Now
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="setimg">
          <div className="cart">
            <img src={RoomImage4} className="Imgset" />
            <p className="wt">
              Hotels cater to a diverse clientele, from international travelers
              to local food enthusiasts. As a hotel chef, versatility is key.
              You must be proficient in preparing a wide range of cuisines, from
              traditional to fusion, to meet the varied tastes and preferences
              of guests.
            </p>
            <Button
              variant="outline-danger"
              style={{ marginLeft: "50%", transform: "translate(-50%)" }}
              className="bt"
            >
              Book Now
            </Button>
          </div>
          <div className="cart">
            <img src={RoomImage5} className="Imgset" />
            <p className="wt">
              Hotels frequently host events, from weddings to conferences.
              Cooking for a large number of guests requires precise planning,
              timing, and coordination. Hotel chefs must excel in the art of
              batch cooking without compromising on quality.
            </p>
            <Button
              variant="outline-danger"
              style={{ marginLeft: "50%", transform: "translate(-50%)" }}
              className="bt"
            >
              Book Now
            </Button>
          </div>
          <div className="cart">
            <img src={RoomImage6} className="Imgset" />
            <p className="wt">
              Many hotels have open kitchens or chef's tables where guests can
              interact with the culinary team. Engaging with diners adds a
              personal touch to their experience and allows chefs to showcase
              their passion for cooking.
            </p>
            <Button
              variant="outline-danger"
              style={{ marginLeft: "50%", transform: "translate(-50%)" }}
              className="bt"
            >
              Book Now
            </Button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="Cont" style={{ marginTop: "50px" }}>
          <video
            src={HotelVideoClip}
            autoPlay
            loop
            muted
            className="HomePageVidoe"
          />
        </div>
      </Container>

      <div style={{ backgroundColor: "#E7E9EB" }}>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "0 auto",
              width: "1000px",
              padding: "60px",
            }}
          >
            <div>
              <img src={HotelStaffImage} className="Imgset" />
            </div>
            <div style={{ marginTop: "0px" }}>
              <h2 style={{ marginLeft: "15px" }}>
                <b style={{ fontSize: "44px" }}>B</b>est{" "}
                <b style={{ fontSize: "44px" }}>H</b>otel In{" "}
                <b style={{ fontSize: "44px" }}>J</b>odhpur
              </h2>
              <p className="wt">
                Experience unparalleled hospitality at our Hotel, where
                personalized service meets contemporary design, creating a haven
                for discerning travelers
              </p>
              <p className="wt">₹500/- per ticket only</p>
              <Button variant="outline-danger" className="bt">
                Learn more
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
