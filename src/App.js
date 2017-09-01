import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'whatwg-fetch';
import "./bootstrap.min.css";
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Team from './components/Team';

import PostModel from './models/post'

const logoLarge = require('./img/KPFIRE.png');

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    fetch('http://dev.andrewhill.io/wordpress/wp-json/wp/v2/posts/?per_page=4')
      .then(function (res) {
        return res.json()
      })
      .then(json => {
        let posts = [];
        json.forEach(post => {
          fetch('http://dev.andrewhill.io/wordpress/wp-json/wp/v2/users/' + post.author).then(response => {
            return response.json()
          }).then(json => {
            return posts.push(new PostModel(post.title.rendered, post.date, json.name, post.content.rendered));
          }).then(() => {
            this.setState({posts});
          })
        })
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div className="logo">
            <img src={logoLarge} alt="KP FIRE"/>
          </div>
          <div className="content">

            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/team/:teamId" component={Team}/>
              <Route
                exact
                path="/contacts"
                render={() => (
                <h3>Coming soon.</h3>
              )}/>
              <Route
                exact
                path="/calendar"
                render={() => (
                <h3>Coming soon.</h3>
              )}/>
              <Route
                exact
                path="/kearstin-parker"
                render={() => (
                <h3>Coming soon.</h3>
              )}/>
            </div>

          </div>
          <div className="footer">
            <div className="copyright">© KP Fire Softball 2017</div>
            <div className="social-media">
              <a href="https://www.facebook.com/KPFiRE/">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
