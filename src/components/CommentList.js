import React, {Component} from 'react'

import Comment from './Comment.js'

class CommentList extends Component {
    render(){
        const { comments } = this.props
        return (
            <div>
                <h2>Comments</h2>
                {comments.length > 0 
                    ? comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                    : <p>There are no comments. Be the first one!</p>
                }
            </div>
        )
    }
}

export default CommentList