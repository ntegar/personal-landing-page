
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'reactstrap';
import './Navbar.css';

library.add(fab)


export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 770.43 673.79">
            <title>logo nt</title>
            <path d="M747.2,461.93v311a63.86,63.86,0,0,1-63.86,63.86h-2a63.86,63.86,0,0,1-63.86-63.86V466.68c0-136.66-64.86-195.5-177.6-195.5S263.29,330,263.29,466.68V772.93a63.86,63.86,0,0,1-63.86,63.86h0a63.86,63.86,0,0,1-63.86-63.86v-311C135.57,268.34,250.31,163,440.89,163,632.46,163,747.2,268.34,747.2,461.93Z" transform="translate(-135.57 -163)"/>
            <rect x="538.93" y="252.15" width="231.5" height="129.7" rx="64.85" ry="64.85"/>
            <circle cx="377.43" cy="317" r="65"/>
            </svg>
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="primary" href="https://medium.com/@ntegar"><FontAwesomeIcon icon={['fab', 'medium']} color="white"/> Blog</Button>
              </NavItem>
            </Nav>
            </Container>
        </Navbar>
      </div>
    );
  }
}