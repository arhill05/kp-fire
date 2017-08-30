import React, {Component} from "react";
const logo = require('../img/KPFIRE_LOGO.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {expandedMenu: false};
  }

  onMenuClick =() => {
    this.setState({expandedMenu: !this.state.expandedMenu})
  }

  render() {
    return (
      <div className="header">
        <div className="brand-logo"><img src={logo} alt="KP"/></div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li className="">Calendar</li>
          <li className="">Teams</li>
          <li className="">Contacts</li>
          <li className="">Kearstin Parker</li>
        </ul>
        <div className="mobile-nav">
        Menu
          <div className="menu-button" onClick={this.onMenuClick}>
            <div className="menu-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={"menu " + (this.state.expandedMenu ? 'expand' : '')}>
            <ul className="">
              <li className="active">Home</li>
              <li className="">Calendar</li>
              <li className="">Teams</li>
              <li className="">Contacts</li>
              <li className="">Kearstin Parker</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }


}

export default Header;
