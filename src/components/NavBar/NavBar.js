import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar className='container' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand><Link to="/" id="navbar-brand">Quiz <span id='navbar-brand-style'>Master</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav className='nav-item'>
            <Nav.Link > <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link > <Link to="/topics">Topics</Link> </Nav.Link>
            <Nav.Link > <Link to="/statistics">Statistics</Link> </Nav.Link>
            <Nav.Link > <Link to="/about-us">About us</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;