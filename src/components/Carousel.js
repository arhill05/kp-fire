import React, {Component} from "react";

const img1 = require('../img/team1.jpg');
const img2 = require('../img/team2.jpg');
const img3 = require('../img/team3.jpg');

class Carousel extends Component {
    constructor(props) {
        super(props);
        let counter = 1;
        this.state = {
            imgSrc: img1,
            imgCounter: counter,
            interval: null
        };
    }
    componentDidMount() {
        this.setState({interval: setInterval(this.changeImgSrc, 5000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    changeImgSrc = () => {
        let imgArray = [img1, img2, img3];;
        this.setState({
            imgSrc: imgArray[this.state.imgCounter],
            imgCounter: this.state.imgCounter === imgArray.length - 1
                ? 0
                : this.state.imgCounter + 1
        })
    }

    render = () => {
        return (
            <div id="carousel">
                <img src={this.state.imgSrc} alt="team"/>
                <ol className="carousel-indicators">
                    <li
                        className={this.state.imgCounter === 0
                        ? 'active'
                        : ''}></li>
                    <li
                        className={this.state.imgCounter === 1
                        ? 'active'
                        : ''}></li>
                    <li
                        className={this.state.imgCounter === 2
                        ? 'active'
                        : ''}></li>
                </ol>
            </div>
        )
    }
}

export default Carousel