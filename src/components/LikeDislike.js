import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'

const LikeDislike = ({score}) => {
    return (
        <div className="icons-like-dislike">
            <Button><Glyphicon glyph="glyphicon glyphicon-thumbs-up" /></Button><br />
            <Button><Glyphicon glyph="glyphicon glyphicon-thumbs-down" /></Button><br />
            <span>{score}</span>
        </div>
    )
}

export default LikeDislike