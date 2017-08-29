import React, { Component } from 'react';
import './App.css';
import "./bootstrap.min.css";
import Header from './components/Header';
const logoLarge = require('./img/KPFIRE.png');

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <div className="logo">
            <img src={logoLarge} alt="KP FIRE" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
