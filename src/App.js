import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Error404 from './Error404';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Route, Switch} from 'react-router-dom';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
