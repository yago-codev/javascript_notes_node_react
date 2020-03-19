import React from 'react';
import { Navbar, Container } from 'rbx';

import './index.scss';

import LogoImage from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={LogoImage} alt="Logo Javascript Note" />
          <Navbar.Burger
            className="navbar-burguer burguer"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu">
          <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
            Item 1
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}