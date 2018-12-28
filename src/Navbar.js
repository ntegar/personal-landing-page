
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'reactstrap';

library.add(fab)


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">nabil tegar</NavbarBrand>
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