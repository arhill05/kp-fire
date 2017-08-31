import React, {Component} from "react";

class Post extends Component {
    render() {
        return (
            <div className={"news-post post-" + (this.props.index + 1)}>
                <div className="post-heading">
                    <span className="post-date">Posted by {this.props.post.author} on {this.props.post.date}</span>
                    <h3>{this.props.post.title}</h3>
                </div>
                <p className="post-content">{this.props.post.content}</p>
            </div>
        );
    }
}

export default Post;
