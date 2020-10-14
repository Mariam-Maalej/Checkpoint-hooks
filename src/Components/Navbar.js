import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Navigate = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movie Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies list</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Navigate;
