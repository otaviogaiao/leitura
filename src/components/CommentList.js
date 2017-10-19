import React, {Component} from 'react'

import Comment from './Comment.js'

class CommentList extends Component {
    render(){
        return (
            <div>
                <h2>Comments</h2>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }
}

export default CommentList