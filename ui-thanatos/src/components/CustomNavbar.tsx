import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function CustomNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="full-navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="home-navbar" href="/">Thanatos</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="full-navbar" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Your Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Your Preferences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={() => setShowLogin(true)}>Sign In</Nav.Link>
            <Nav.Link href="#" onClick={() => setShowSignup(true)}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginForm show={showLogin} onHideModal={() => setShowLogin(false)} />
      <SignupForm show={showSignup} onHideModal={() => setShowSignup(false)} />
    </div>
  );
}

export default CustomNavbar;
