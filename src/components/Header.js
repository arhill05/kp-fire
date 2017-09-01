import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const logo = require('../img/KPFIRE_LOGO.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedMenu: false
    };
  }

  onMenuClick = () => {
    this.setState({
      expandedMenu: !this.state.expandedMenu
    })
  }

  render() {
    return (
      <div className="header">
        <div className="brand-logo"><img src={logo} alt="KP"/></div>
        <div className="nav-links">
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" exact to="/calendar">Calendar</NavLink>
          <NavLink activeClassName="active" to="/team/1">Team 1</NavLink>
          <NavLink activeClassName="active" to="/team/2">Team 2</NavLink>
          <NavLink activeClassName="active" exact to="/contacts">Contacts</NavLink>
          <NavLink activeClassName="active" exact to="/kearstin-parker">Kearstin Parker</NavLink>
        </div>
        <div className="mobile-nav">
          Menu
          <div className="menu-button" onClick={this.onMenuClick}>
            <div className="menu-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={"menu " + (this.state.expandedMenu
            ? 'expand'
            : '')}>
            <div className="mobile-nav-links">
              <NavLink onClick={this.onMenuClick} exact to="/" activeClassName="active" className="mobile-nav-link">Home</NavLink>
              <NavLink onClick={this.onMenuClick} exact to="/calendar" activeClassName="active" className="mobile-nav-link">Calendar</NavLink>
              <NavLink onClick={this.onMenuClick} to="/team/1" activeClassName="active" className="mobile-nav-link">Team 1</NavLink>
              <NavLink onClick={this.onMenuClick} to="/team/2" activeClassName="active" className="mobile-nav-link">Team 2</NavLink>
              <NavLink onClick={this.onMenuClick} exact to="/contacts" activeClassName="active" className="mobile-nav-link">Contacts</NavLink>
              <NavLink onClick={this.onMenuClick} exact to="/kearstin-parker" activeClassName="active" className="mobile-nav-link">Kearstin Parker</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
