import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import useWindowSize from "../../customHook/useWindowSize";

const NavigationBar = () => {
  const windowSize = useWindowSize();

  return (
    <Navbar
      style={{ background: "black" }}
      expand="lg"
      sticky="top"
      className="p-3 px-5"
    >
      <Navbar.Brand href="#home" className="text-light mr-4">
        Client Logo
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ background: "white" }}
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={windowSize > 900 ? "d-flex justify-content-between" : ""}
      >
        <Nav className="mr-auto">
          <Nav.Link className="text-secondary  mx-2" href="#product">
            Product
          </Nav.Link>
          <Nav.Link className="text-secondary mx-2" href="#solution">
            Solution
          </Nav.Link>
          <Nav.Link className="text-secondary mx-2" href="#tools">
            Tools
          </Nav.Link>
          <Nav.Link className="text-secondary mx-2" href="#pricing">
            Pricing
          </Nav.Link>
          <Nav.Link className="text-secondary mx-2" href="#company">
            Company
          </Nav.Link>
          <Nav.Link className="text-secondary mx-2" href="#resources">
            Resources
          </Nav.Link>
        </Nav>
        <div>
          <Button variant="primary" className="m-2">
            Start 14-days free trial
          </Button>
          <Button className="m-2" variant="light">
            Schedule Demo
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
