import React, {Component} from 'react'

import {Well, Button} from 'react-bootstrap'
import moment from 'moment'
import PropTypes from 'prop-types'

import LikeDislike from './LikeDislike.js'
import CommentForm from './CommentForm'

import '../styles/comment.css'


class Comment extends Component {

    state = {
        editing: false
    }

    edit = () => {
        this.setState((oldState) => {
            return {editing: !oldState.editing}
        })
    }
  
    render(){
        const { comment, onVoteAction, onEditAction, onDeleteAction } = this.props
        let date = moment(new Date(comment.timestamp)).format('MMMM Do YYYY, h:mm:ss a')
        return <Well>
             {this.state.editing 
               ?
                <div>
                  <div className='comment-form'>
                    <CommentForm username={comment.author} body={comment.body} 
                        onSubmitAction={(username, body) => { onEditAction(comment, username, body);
                                this.edit() }} />
                  </div>
                    <div className='cancel-button'>
                        <Button bsStyle="danger" onClick={this.edit}>Cancel</Button>
                    </div>
                </div>
                : 
                <div className='comment'>
                    <LikeDislike score={comment.voteScore} onVoteAction={(vote) => onVoteAction(comment, vote)}/>
                    <span className='small'>By {comment.author} on {date}</span><br/>
                    <p className='comment-body'>{comment.body}</p>
                    <div>
                        <a onClick={this.edit} className="link-black">Edit</a> <a className="link-black" onClick={() => onDeleteAction(comment.id)}>Delete</a>
                    </div>
                </div>}
            
       </Well>
    }
}

export default Comment

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onVoteAction: PropTypes.func.isRequired,
    onEditAction: PropTypes.func.isRequired,
    onDeleteAction: PropTypes.func.isRequired
}