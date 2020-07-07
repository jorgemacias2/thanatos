import React from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
