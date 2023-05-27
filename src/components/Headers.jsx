import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../css/headers.css";
import Perfil from "../assets/perfil.jpg"
const Headers = () => {
  return (
    
      <div className="header">
        <div >
          <img className="img" src={Perfil} alt="" />
        </div>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand>Flores Aguirres Diego</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
};

export default Headers;
