
import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
            <span>Made with 💕 by <a href="https://github.com/ntegar/personal-landing-page">Nabil Tegar</a></span>
        </Container>
      </div>
    );
  }
}