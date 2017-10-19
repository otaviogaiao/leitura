import React from 'react'
import {Button, Glyphicon} from 'react-bootstrap'

const LikeDislike = () => {
    return (
        <div className="icons-like-dislike">
            <Button><Glyphicon glyph="glyphicon glyphicon-thumbs-up" /></Button><br />
            <span>{280}</span><br />
            <Button><Glyphicon glyph="glyphicon glyphicon-thumbs-down" /></Button><br />
            <span>{15}</span>
        </div>
    )
}

export default LikeDislike