import React, { Component } from 'react';
import './App.css';
import { Container, Row } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="Error404">
        <Container className="topcontainer">
        <Typing>
          <Row style={{justifyContent:'center'}}>
            <h1>So sad.<span role="img" aria-label="sad">😭</span></h1>
          </Row>
          <Typing.Delay ms={5000} />
          <Row style={{justifyContent:'center', textAlign: 'center'}}>
            <p>
                Yeah, there is nothing here.<Typing.Delay ms={5000} />
                <br></br>Why are you still waiting?<Typing.Delay ms={5000} />
                <br></br>Ok, here is the <Link to="/">right page.</Link>
            </p>
          </Row>
          </Typing>
        </Container>
      </div>
    );
  }
}

export default App;
