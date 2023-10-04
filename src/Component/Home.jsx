import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import image from '../Images/images.jpeg'
import logo from '../Images/logo 1.png'
import img1 from '../Images/beach-hotel.jpg'
import img2 from '../Images/hotels.jpg'
import img3 from '../Images/photo.jpg'
import img4 from '../Images/a2x2kd.jpg'
import img5 from '../Images/mast.jpg'
import img6 from '../Images/chef.jpg'
import img7 from '../Images/hotel-1640201_1280.jpg'
import img8 from '../Images/bedroom-490779_640.jpg'
import img9 from '../Images/bedroom-5664221_640.jpg'
import img10 from '../Images/room.webp'
import img11 from '../Images/464303942.jpg'
import img12 from '../Images/images (4).jpeg'
import {AiOutlineInstagram,AiFillFacebook,AiOutlineWhatsApp,AiFillTwitterCircle} from 'react-icons/ai'
function Home() {
  return (
    <div>
      <div className='Cont'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 slide "
              src={img1} // Replace with the path to your image
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>Slide 1</h3>
          <p>Some description for the first slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={img2} // Replace with the path to your image
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Slide 2</h3>
          <p>Some description for the second slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slide"
              src={img3} // Replace with the path to your image
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Slide 3</h3>
          <p>Some description for the third slide.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div style={{ backgroundColor: "#E7E9EB", marginTop: "40px" }}>
        <Container>
          <Row >
            <Col style={{ marginTop: "40px" }}>
              <h2 style={{ width: "400px", fontFamily: "-moz-initial" }}>About the Berlin Encore Hotel and Suites</h2>
              <p style={{ width: "500px" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
                earum nam explicabo incidunt iusto in expedita numquam nisi aliquid
                similique veritatis neque optio, repellendus tenetur, distinctio debitis
                esse sit animi fugiat harum vel. Voluptatum, aperiam modi reprehenderit sint ducimus minima mollitia
                illum dolorem possimus praesentium suscipit similique error id. Eveniet!
              </p>
              <p>Jeff surname -Managing Director</p>
            </Col>
            <Col className='text-center'>
              <img src={img7} className='Imgset-2 '  />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: '40px' }}>
        <Container>
          <h2>Rooms and Suites</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className='cart'>
              <img src={img8} className='Imgset' />
              <p className='wt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis expedita voluptas dolores aliquid praesentium laboriosam,
                error veniam sint quis accusamus maxime, eaque voluptates accusantium assumenda
                .</p>
              <Button variant="outline-dark" className='bt'>Book & Now</Button>

            </div>
            <div className='cart'>
              <img src={img9} className='Imgset' />
              <p className='wt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis expedita voluptas dolores aliquid praesentium laboriosam,
                error veniam sint quis accusamus maxime, eaque voluptates accusantium assumenda
                .</p>
              <Button variant="outline-dark" className='bt'>Book & Now</Button>
            </div>

            <div className='cart'>
              <img src={img10} className='Imgset' />
              <p className='wt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nobis expedita voluptas dolores aliquid praesentium laboriosam,
                error veniam sint quis accusamus maxime, eaque voluptates accusantium assumenda
                .</p>
              <Button variant="outline-dark" className='bt'>Book & Now</Button>

            </div>

          </div>
        </Container>
      </div>

      <Container>
        <div className='setimg'>
          <div className='cart'>
            <img src={img4} className='Imgset' />
            <p className='wt'>Hotels cater to a diverse clientele, from international travelers
              to local food enthusiasts. As a hotel chef, versatility is key.
              You must be proficient in preparing a wide range of cuisines,
              from traditional to fusion, to meet the varied tastes and preferences of guests.</p>
            <Button variant="outline-dark" className='bt'>Book & Now</Button>

          </div>
          <div className='cart'>
            <img src={img5} className='Imgset' />
            <p className='wt'>Hotels frequently host events, from weddings to conferences.
              Cooking for a large number of guests requires precise planning, timing, and coordination.
              Hotel chefs must excel in the art of batch cooking without compromising on quality.</p>
            <Button variant="outline-dark" className='bt'>Book & Now</Button>

          </div>
          <div className='cart'>
            <img src={img6} className='Imgset' />
            <p className='wt'>Many hotels have open kitchens or chef's tables where guests
              can interact with the culinary team. Engaging
              with diners adds a personal touch to their experience
              and allows chefs to showcase their passion for cooking.</p>
            <Button variant="outline-dark" className='bt'>Book & Now</Button>

          </div>
        </div>
      </Container>
      <div className='Cont' style={{ marginTop: "50px" }}>
        <img src={img11} style={{ height: "500px", width: "100%", borderRadius: "10px" }} />
      </div>

      <div style={{ backgroundColor: "#E7E9EB" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-around", margin: "0 auto", width: '1000px', padding: "60px" }}>
            <div>
              <img src={img12} className='Imgset' />
            </div>
            <div style={{ marginTop: "0px" }}>
              <h2 style={{ marginLeft: "15px" }}>Amish Country Theater</h2>
              <p className='wt' >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ipsa quas quibusdam est maiores ut labore praesentium ducimus
                recusandae provident aliquid! Tempora quisquam dolorem
                consectetur beatae aliquid ea nemo quo at.</p>
              <p className='wt'>$39 per ticket</p>
              <Button variant="outline-dark" className='bt'>Learn more</Button>

            </div>
          </div>
        </Container>
      </div>

      <div style={{backgroundColor:"#fff3cd99"}} className='mt-4 py-3'>
        <Container>
          <Row className=""> 
            <Col xs={12} sm={6} md={4} lg={3} className='text-center'>
              <img src={logo} alt="logo" className='img-fluid' style={{width:"230px"}}/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil distinctio necessitatibus atque, labore est animi soluta
               nobis beatae fuga voluptas accusamus repellat.</p>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className='justify-content-center'>
              <h5 className='ms-5 mt-3'>Usefull Links</h5>
              <ul className='p-0 ms-5' style={{listStyle:"none", marginTop:"38px"}}>
                <li><a href="#" className='a'>Home</a></li>
                <li><a href="#" className='a'>Gallery</a></li>
                <li><a href="#" className='a'>About us</a></li>
                <li><a href="#" className='a'>Contact us</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className='justify-content-center'>
            <h5 className='ms-5 mt-3'>Contact</h5>
            <ul className='p-0 ms-5' style={{listStyle:"none", marginTop:"38px"}}>
              <li>New yark 1002 , us</li>
              <li> <a href='#' className='a'>Example@gmail.com </a></li>
              <li>+ 7878456665</li>
              <li>+ 5656666777</li>
            </ul>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className='justify-content-center'>
            <h5 className='ms-5 mt-3'>Contact</h5>
            <ul className='p-0 ms-5' style={{listStyle:"none", marginTop:"38px"}}>
             <li> <a href='#' className='a '><AiOutlineInstagram className='me-2 fs-4'/>Instagram</a></li>
             <li><a href='#' className='a'><AiFillFacebook className='me-2 fs-4'/>Facebook</a></li>
              <li><a href='#' className='a'><AiOutlineWhatsApp className='me-2 fs-4'/>Whatsapp</a></li>
              <li><a href='#' className='a'><AiFillTwitterCircle className='me-2 fs-4'/>Twitter</a></li>
            </ul>
            </Col>
          </Row>
<hr/>
        </Container>
      </div>
    </div>
  );
}

export default Home;
