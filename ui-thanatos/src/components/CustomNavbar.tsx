import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <div className="full-navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="home-navbar" href="#home">RebuscApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="full-navbar" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="#features">Home</Nav.Link>
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Your Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Your Preferences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
