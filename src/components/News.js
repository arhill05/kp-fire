import React, {Component} from "react";
import 'whatwg-fetch';

import Post from './Post'

import PostModel from '../models/post'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const posts = [];
        const news = await fetch('http://dev.andrewhill.io/wordpress/wp-json/wp/v2/posts/?per_page=4')
        const newsJson = await news.json();
        for (let post of newsJson) {
            const author = await fetch('http://dev.andrewhill.io/wordpress/wp-json/wp/v2/users/' + post.author);
            const authorJson = await author.json();
            posts.push(new PostModel(post.title.rendered, post.date, authorJson.name, post.content.rendered));
        }
        this.setState({posts})
    }

    render() {
        const posts = this
            .state
            .posts
            .sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            })
            .map((post, index) => {
                return <Post index={index} key={index} post={post}/>
            })
        return (
            <div className="news">
                <h2>News</h2>
                <div className="news-container">
                    {posts}
                </div>
            </div>
        );
    }

}

export default News;
