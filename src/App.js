import React, {Component} from 'react';
import "./bootstrap.min.css";
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Post from './components/Post'
const logoLarge = require('./img/KPFIRE.png');

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [
        {
          title: 'News Post 1',
          date: '8/30/2017',
          author: 'Jane Doe',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisl dui.
        Aliquam euismod interdum quam vitae faucibus. Ut vitae diam enim. Aliquam ut
        ornare est. In augue purus, tempor vitae eleifend vitae, tempus ut est.
        Pellentesque dapibus velit sit amet nibh sagittis, sed pellentesque dolor
        aliquet. Aenean placerat tristique pretium. Phasellus tempus mattis sem sed
        placerat. Duis vulputate suscipit orci, non blandit libero interdum in. Duis
        ultricies volutpat dui. Etiam magna felis, ullamcorper eu arcu non, congue
        rhoncus nisl. Cras ornare mauris dolor, quis commodo ipsum vestibulum sit amet.
        In et nunc id magna rutrum ultricies porttitor at sapien. Sed ac nulla non diam
        tincidunt fermentum.`
        }, {
          title: 'News Post 2',
          date: '8/30/2017',
          author: 'Jane Doe',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisl dui.
        Aliquam euismod interdum quam vitae faucibus. Ut vitae diam enim. Aliquam ut
        ornare est. In augue purus, tempor vitae eleifend vitae, tempus ut est.
        Pellentesque dapibus velit sit amet nibh sagittis, sed pellentesque dolor
        aliquet. Aenean placerat tristique pretium. Phasellus tempus mattis sem sed
        placerat. Duis vulputate suscipit orci, non blandit libero interdum in. Duis
        ultricies volutpat dui. Etiam magna felis, ullamcorper eu arcu non, congue
        rhoncus nisl. Cras ornare mauris dolor, quis commodo ipsum vestibulum sit amet.
        In et nunc id magna rutrum ultricies porttitor at sapien. Sed ac nulla non diam
        tincidunt fermentum.`
        }, {
          title: 'News Post 3',
          date: '8/30/2017',
          author: 'Jane Doe',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisl dui.
        Aliquam euismod interdum quam vitae faucibus. Ut vitae diam enim. Aliquam ut
        ornare est. In augue purus, tempor vitae eleifend vitae, tempus ut est.
        Pellentesque dapibus velit sit amet nibh sagittis, sed pellentesque dolor
        aliquet. Aenean placerat tristique pretium. Phasellus tempus mattis sem sed
        placerat. Duis vulputate suscipit orci, non blandit libero interdum in. Duis
        ultricies volutpat dui. Etiam magna felis, ullamcorper eu arcu non, congue
        rhoncus nisl. Cras ornare mauris dolor, quis commodo ipsum vestibulum sit amet.
        In et nunc id magna rutrum ultricies porttitor at sapien. Sed ac nulla non diam
        tincidunt fermentum.`
        }, {
          title: 'News Post 4',
          date: '8/30/2017',
          author: 'John Doe',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisl dui.
        Aliquam euismod interdum quam vitae faucibus. Ut vitae diam enim. Aliquam ut
        ornare est. In augue purus, tempor vitae eleifend vitae, tempus ut est.
        Pellentesque dapibus velit sit amet nibh sagittis, sed pellentesque dolor
        aliquet. Aenean placerat tristique pretium. Phasellus tempus mattis sem sed
        placerat. Duis vulputate suscipit orci, non blandit libero interdum in. Duis
        ultricies volutpat dui. Etiam magna felis, ullamcorper eu arcu non, congue
        rhoncus nisl. Cras ornare mauris dolor, quis commodo ipsum vestibulum sit amet.
        In et nunc id magna rutrum ultricies porttitor at sapien. Sed ac nulla non diam
        tincidunt fermentum.`
        }
      ]
    }
  }

  componentDidMount() {}

  render() {
    const posts = this
      .state
      .posts
      .map((post) => {
        return <Post post={post}/>
      })
    return (
      <div>
        <Header/>
        <div className="logo">
          <img src={logoLarge} alt="KP FIRE"/>
        </div>
        <div className="content">
          <Carousel/>
          <div className="about">
            <h1>WE ARE KP FiRE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at nisl dui.
              Aliquam euismod interdum quam vitae faucibus. Ut vitae diam enim. Aliquam ut
              ornare est. In augue purus, tempor vitae eleifend vitae, tempus ut est.
              Pellentesque dapibus velit sit amet nibh sagittis, sed pellentesque dolor
              aliquet. Aenean placerat tristique pretium. Phasellus tempus mattis sem sed
              placerat. Duis vulputate suscipit orci, non blandit libero interdum in. Duis
              ultricies volutpat dui. Etiam magna felis, ullamcorper eu arcu non, congue
              rhoncus nisl. Cras ornare mauris dolor, quis commodo ipsum vestibulum sit amet.
              In et nunc id magna rutrum ultricies porttitor at sapien. Sed ac nulla non diam
              tincidunt fermentum.</p>
          </div>
          <div className="news">
            <h2>News</h2>
            {posts}
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
    );
  }
}

export default App;
