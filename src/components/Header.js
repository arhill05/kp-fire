import React, { Component } from "react";
const logo = require('../img/KPFIRE_LOGO.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="header">
          <div className="logo-wrapper"><img src={logo} alt="KP"/></div>
        </div>
    );
  }
}

export default Header;
