
import React from 'react';
import './Footer.css';
import { Container} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
            <span>Made with <span role="img" aria-label="love">💕</span> by <a href="https://github.com/ntegar/personal-landing-page">Nabil Tegar</a></span>
        </Container>
      </div>
    );
  }
}