import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <NavItem>
            <NavLink exact to="/" className="nav-link">
              HTML
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Python" className="nav-link">
              Python
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}
