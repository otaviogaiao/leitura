import React, {Component} from 'react'

import {Grid, Row, Col} from 'react-bootstrap'

import LikeDislike from './LikeDislike.js'
import '../styles/headerPost.css'
import moment from 'moment'
import { votePost } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HeaderPost extends Component {

    vote = (vote) => {
        this.props.dispatch(votePost(this.props.post.id, vote))
    }

    render(){
        const { post, showActions, onEdit } = this.props
        let date = moment(new Date(post.timestamp)).format('MMMM Do YYYY, h:mm:ss a')
        return (
            <Grid className="alinhar-esquerda">
                <Row>
                    <Col md={2} lg={2}>
                        <LikeDislike score={post.voteScore} 
                            onVoteAction={this.vote}
                            id={post.id} />
                    </Col>
                    <Col md={10} lg={10}>
                        <h1>{post.title}</h1>
                        <div>
                            <p>Submitted on {date} by {post.author}</p>
                            {showActions && <span><a className="link-black">{post.commentCount} comments </a> 
                            <a className="link-black" onClick={onEdit}>Edit</a> <a className="link-black">Delete</a></span>}
                        </div>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default withRouter(connect()(HeaderPost))