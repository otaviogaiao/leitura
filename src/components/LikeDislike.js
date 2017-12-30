import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'


const LikeDislike = ({score, onVoteAction}) => {
    return (
        <div className="icons-like-dislike">
            <Button onClick={() => onVoteAction('upvote')}>
                <Glyphicon glyph="glyphicon glyphicon-thumbs-up" /></Button><br />
            <Button onClick={() => onVoteAction('downvote')}>
                <Glyphicon glyph="glyphicon glyphicon-thumbs-down" /></Button><br />
            <span>{score}</span>
        </div>
    )
}


export default LikeDislike