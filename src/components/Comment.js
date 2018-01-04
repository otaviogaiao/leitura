import React, {Component} from 'react'

import {Well, Button, Grid, Row, Col} from 'react-bootstrap'
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
                    <Grid fluid={true}>
                        <Row>
                            <Col sm={12} md={12}>
                                <CommentForm username={comment.author} body={comment.body} 
                            onSubmitAction={(username, body) => { onEditAction(comment, username, body);
                                    this.edit() }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                            <div className='cancel-button'>
                                <Button bsStyle="danger" onClick={this.edit}>Cancel</Button>
                            </div>
                            </Col>
                        </Row>
                    </Grid>
                  {/* <div className='comment-form'>
                    
                  </div> */}

                </div>
                : 
                <div className='comment'>
                    <Grid fluid={true}>
                        <Row>
                            <Col sm={1} md={1}>
                                <LikeDislike score={comment.voteScore} onVoteAction={(vote) => onVoteAction(comment, vote)}/>
                            </Col>
                            <Col sm={11} md={11}>
                                <span className='small'>By {comment.author} on {date}</span><br/>
                                <p className='comment-body'>{comment.body}</p>
                                <div>
                                    <a onClick={this.edit} className="link-black">Edit</a> <a className="link-black" onClick={() => onDeleteAction(comment.id)}>Delete</a>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    
                  
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