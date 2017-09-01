import React from "react";

import Carousel from './Carousel';
import News from './News';

const Home = () => (
    <section className="home">
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
        <News/>
    </section>
)

export default Home;
