import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from './Footer';

const AboutUs = () => {
  return (
<>
<Container className="mt-5">
      <Row>
        <Col md={8}>
          <h1>Welcome to Grand Horizon Hotel</h1>
          <p>
            Grand Horizon Hotel is more than just a place to stay; it's a reflection of [City]'s vibrancy and a haven of luxury and comfort. Our commitment to providing an unparalleled experience has made us a preferred choice for travelers from around the world.
          </p>
          <h2>Our Story</h2>
          <p>
            Established in [Year], Grand Horizon Hotel has been an integral part of [City]'s hospitality landscape. Our story is woven with a passion for service, a dedication to excellence, and a deep-rooted connection to the local community.
          </p>
          <p>
            From our early days as a boutique hotel to our current status as a luxury destination, every chapter of our story is marked by the warmth and genuine hospitality that define the Grand Horizon experience.
          </p>
          <h2>Our Facilities</h2>
          <p>
            Grand Horizon Hotel is proud to offer a range of world-class facilities designed to elevate your stay to new heights:
          </p>
          <ul>
            <li>Luxurious suites and rooms with breathtaking city views</li>
            <li>State-of-the-art fitness center and rejuvenating spa</li>
            <li>Exquisite dining experiences featuring renowned chefs</li>
            <li>Versatile event spaces for weddings, conferences, and special occasions</li>
            <li>Outdoor pool and terrace providing a tranquil escape</li>
          </ul>
          <h2>Dining Experience</h2>
          <p>
            Indulge your senses with our culinary delights. Our dining experiences are crafted to tantalize your taste buds and create unforgettable moments. From gourmet cuisine to casual dining, our diverse menus cater to every palate.
          </p>
          <h2>Event Spaces</h2>
          <p>
            Celebrate life's special moments in our elegant event spaces. Whether it's a wedding, corporate event, or social gathering, our dedicated team ensures seamless execution and a memorable experience for you and your guests.
          </p>
          <h2>Guest Testimonials</h2>
          <p>
            Don't just take our word for it. Hear what our guests have to say about their experiences at Grand Horizon Hotel:
          </p>
          {/* Add a carousel or grid of guest testimonials here */}
          <h2>Community Engagement</h2>
          <p>
            We believe in giving back to the community that has welcomed us with open arms. Our community engagement initiatives include [Specific Initiatives], demonstrating our commitment to making a positive impact beyond our walls.
          </p>
          <h2>Sustainability Initiatives</h2>
          <p>
            Grand Horizon is dedicated to sustainability. Our initiatives include [Specific Sustainability Initiatives], ensuring that your stay contributes to a greener and healthier planet.
          </p>
          <h2>Join Our Team</h2>
          <p>
            Grand Horizon Hotel is always looking for passionate individuals to join our team. Explore career opportunities and become a part of our commitment to excellence.
          </p>
          <Button variant="primary" href="/careers">Explore Careers</Button>
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you! If you have any questions or inquiries, feel free to reach out to us:
          </p>
          <address>
            <strong>Grand Horizon Hotel</strong><br />
            123 Main Street, Cityville<br />
            [Your Country]<br />
            <abbr title="Phone">P:</abbr> (123) 456-7890
          </address>
          <Button variant="primary" href="mailto:info@grandhorizonhotel.com">Email Us</Button>
        </Col>
        <Col md={4}>
          <img src="/path/to/hotel-image.jpg" alt="Grand Horizon Hotel" className="img-fluid" />
        </Col>
      </Row>
    </Container>
    <Footer/>
</>
    )
}

export default AboutUs