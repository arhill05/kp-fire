import 'whatwg-fetch';

const $ = require('../../node_modules/jquery');


class PostModel {
    constructor(title, date, author, content) {
        this.title = title;
        this.date = new Date(date).toLocaleDateString('en-US');
        this.author = author
        this.content = $('<div/>')
            .html(content)
            .text();
    }
}

export default PostModel;