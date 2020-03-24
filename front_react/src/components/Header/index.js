import React from 'react';
import { Navbar, Container, Column } from 'rbx';
import { Link } from 'react-router-dom';

import './index.scss';

import LogoImage from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={LogoImage} alt="Logo Javascript Note" />
          </Link>
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
            <Column.Group>
              <Column>
                <Link to="/register" className="button is-white has-text-custom-purple">
                  Registre-se
                </Link>
              </Column>

              <Column>
                <Link to="/login" className="button is-outlined is-custom-purple">
                  Login
                </Link>
              </Column>
            </Column.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}