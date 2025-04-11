import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">🍨 Ideal Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <FormControl type="search" placeholder="Search Ice Creams" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link as={Link} to="/cart" className="text-dark">
            <FaShoppingCart size={20} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
