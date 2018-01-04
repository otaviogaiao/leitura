import React, { Component } from 'react'
import {Button, Glyphicon} from 'react-bootstrap'
import PropTypes from 'prop-types'


class LikeDislike extends Component {

    state = {
        up: false,
        down: false
    }

    render(){
        let { score, onVoteAction } = this.props
        let { up, down } = this.state
        return (
            <div className="icons-like-dislike">
                <Button onClick={() => { onVoteAction('upVote'); this.setState({up: true})}}  disabled={up || down} 
                   { ...up ? { bsStyle: "info"} : '' }>
                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" /></Button><br />
                <Button onClick={() => {onVoteAction('downVote'); this.setState({down: true})}}  disabled={up || down}
                   { ...down ? { bsStyle: "warning"} : '' } >
                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" /></Button><br />
                <span>{score}</span>
            </div>
        )
    }
}

export default LikeDislike

LikeDislike.propTypes = {
    score: PropTypes.number.isRequired,
    onVoteAction: PropTypes.func
}