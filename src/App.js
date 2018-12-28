import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import TextLoop from "react-text-loop";
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container className="topcontainer">
          <Row>
            <Col sm="8">
              <h1>Hi, I am <span id="nabil">Nabil</span> Tegar.</h1>
              <h5 style={{fontWeight: 'normal'}}>
                <TextLoop  mask={true}>
                  <span>IS Undergrad 👨‍🎓</span>
                  <span>Business 💸</span>
                  <span>Tech 💻</span>
                  <span>Basketball 🏀</span>
                  <span>Music 🎸</span>
                  <span>Bahasa Indonesia 🇮🇩</span>
                  <span>English 🇺🇸</span>
                  <span>Dutch 🇳🇱</span>
                </TextLoop>
              </h5>
              <Row style={{marginTop:'40px'}}>
                <Col sm="8">
                <a href="https://www.linkedin.com/in/nabiltegar/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a>
                <a href="https://github.com/ntegar"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a>
                <a href="https://twitter.com/ntegar"><FontAwesomeIcon icon={['fab', 'twitter-square']} size="lg" /></a>
                <a href="https://www.facebook.com/ntegar"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a>
                <a href="https://www.instagram.com/ntegar/"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a>
                <a href="https://open.spotify.com/user/ntegar/playlist/17r8GfwFeiPO9OB0iiPDj3?si=xQIc5sDhQ2mxI0Scq4KhtQ"><FontAwesomeIcon icon={['fab', 'spotify']} size="lg" /></a>
                </Col>
              </Row>
            </Col>
            <Col sm="4" style={{justifyContent:'center'}}>
              <h2>
                <TextLoop>
                  <span>First item</span>
                  <span>Second item</span>
                  <span>Third item</span>
                </TextLoop>
              </h2>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
