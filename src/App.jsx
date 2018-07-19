import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Alert from './components/alert/Alert';

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <div className="App">
        <Router basename={baseUrl}>
          <div>
            <Header />
            <Body />
            <Footer />
            <Alert />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
