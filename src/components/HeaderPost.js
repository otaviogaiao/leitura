import React, {Component} from 'react'

import {Grid, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'

import LikeDislike from './LikeDislike.js'
import '../styles/headerPost.css'
import moment from 'moment'
import { votePost, deletePost } from '../actions'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class HeaderPost extends Component {

    vote = (vote) => {
        // this.props.dispatch(votePost(this.props.post.id, vote))
        this.props.votePost(this.props.post.id, vote)
    }

    delete = () => {
        const { deletePost, post, history } = this.props 
        deletePost(post.id).then(() => history.push('/'))
    }

    render(){
        const { post, showActions } = this.props
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
                            {showActions && <span><span className="link-black">
                               {post.commentCount === 1 ? '1 comment ' : `${post.commentCount} comments `}</span> 
                            <Link className="link-black" to={`/${post.category}/${post.id}/edit`}>Edit</Link> <a className="link-black" 
                            onClick={this.delete}>Delete</a></span>}
                        </div>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        deletePost: (id) => dispatch(deletePost(id)),
        votePost: (id, vote) => dispatch(votePost(id, vote))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(HeaderPost))

HeaderPost.propTypes = {
    votePost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    history: PropTypes.object,
    showActions: PropTypes.bool
}