import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment.js'

function CommentList (props) {
    const { comments, onVoteAction, onEditAction, onDeleteAction } = props
    return (
        <div>
            <h2>Comments</h2>
            {comments.length > 0 
                ? comments.map(comment => <Comment comment={comment} key={comment.id}
                     onVoteAction={onVoteAction} onEditAction={onEditAction} onDeleteAction={onDeleteAction} />)
                : <p>There are no comments. Be the first one!</p>
            }
        </div>
    )
}

export default CommentList

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    onVoteAction: PropTypes.func.isRequired,
    onEditAction: PropTypes.func.isRequired,
    onDeleteAction: PropTypes.func.isRequired
}