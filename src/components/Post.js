import React from "react";

const Post = ({post}) => {
    return (
        <div className="news-post">
            <div className="post-heading">
                <span className="post-date">Posted by {post.author} on {post.date}</span>
                <h3>{post.title}</h3>
            </div>
            <p className="post-content">{post.content}</p>
        </div>
    );
}

export default Post;
