import React, {Component} from 'react'

import Comment from './Comment.js'

function CommentList (props) {
    const { comments } = props
    return (
        <div>
            <h2>Comments</h2>
            {comments.length > 0 
                ? comments.map(comment => <Comment comment={comment} key={comment.id} />)
                : <p>There are no comments. Be the first one!</p>
            }
        </div>
    )
}

export default CommentList