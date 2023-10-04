import React from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Images/images (1).png'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container style={{width:"100%"}}>
                    <div className='navstyle'>
                        <div>
                            <Navbar.Brand href="#home">
                                <img src={logo} className='logo' />
                            </Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" style={{marginLeft:"250px"}}>
                                    <Link to={"/"} className='Nav'>Home</Link>
                                    <Link to={"/gallery"} className='Nav'>Gallery</Link>
                                    <Link to={"/about"} className='Nav'>About Us</Link>
                                    <Link to={"/contact"} className='Nav'>Contact</Link>
                                    {/* <Nav.Link href={"/"}>Home</Nav.Link>
                            <Nav.Link to={"/about"}>About Us</Nav.Link> */}

                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header