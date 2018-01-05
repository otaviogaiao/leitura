import React, {Component} from 'react'


import {Grid, Row, Col, ButtonToolbar, Button, FormControl } from 'react-bootstrap'

import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import _orderBy from 'lodash.orderby'

import CommentList from '../components/CommentList.js'
import HeaderPost from '../components/HeaderPost.js'
import CommentForm from '../components/CommentForm'

import { byId } from '../utils/helpers'

import { getPostById, getComments, voteComment, addNewComment, updateComment,
     deleteComment } from '../actions'


class PostContainer extends Component {

    state = {
        editing: false,
        comment: ''
    }

    componentDidMount(){
        const postId = this.props.match.params.post_id
        this.props.getPost(postId)
        this.props.getAllComments(postId)
    }

    vote = (comment, vote) => {
        this.props.voteComment(comment, vote)
    }

    addComment = (username, body) => {
        let comment = {
            id: new Date().getTime(),
            author: username,
            body,
            parentId: this.props.post.id,
            timestamp: new Date().getTime(),
            voteScore: 1
        }
        this.props.addComment(comment)
    }

    updateComment = (comment, username, body) => {
        let updatedComment = {...comment, body, timestamp: new Date().getTime()}
        this.props.updateComment(updatedComment)
    }

    deleteComment = (id) => {
        this.props.deleteComment(id)
    }
    
    render(){
        const { post, comments, loading, loadingComments } = this.props

        if(loading || !post)
            return <div>Loading...</div>


        return (
           <Grid>
               <Row>
                   <Col md={9} lg={9}>
                      <div>
                          {!this.state.editing &&
                           ([<HeaderPost key='header' post={post}/>,
                            <div key='text' dangerouslySetInnerHTML={{__html: post.body}}></div>])
                           }
                           {this.state.editing &&
                            <form>
                                <FormControl type="text" defaultValue={'Title'}/>
                                <FormControl componentClass="textarea" defaultValue={post.body} style={{ minHeight: 400 }}/>
                                <br/>
                                <div>
                                    <Button bsStyle="primary">Save</Button> <Button bsStyle="warning" onClick={this.edit}>Cancel</Button>
                                </div>
                                
                            </form>
                           }
                      </div>
                     <hr />
                      <form>
                          <h3>Add Comment</h3>
                          <CommentForm onSubmitAction={this.addComment}/>
                      </form>
                      <br />
                    
                      {loadingComments
                        ? <p>Loading comments ...</p>
                        :  <CommentList comments={comments} onVoteAction={this.vote}
                             onEditAction={this.updateComment} onDeleteAction={this.deleteComment}/>
                      }
                     
                   </Col>

                   <Col md={3} lg={3}>
                        <ButtonToolbar>
                        <Link to="/posts/new" style={{":hover": {textDecoration: 'none', color: 'inherit'}, 
                         textDecoration: 'none', color: 'inherit'}}>
                            <Button bsStyle="primary">                        
                                    New Post
                            </Button>
                        </Link>
                        </ButtonToolbar>
                   </Col>
               </Row>
          </Grid>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPost: (postId) => dispatch(getPostById(postId)),
        getAllComments: (postId) => dispatch(getComments(postId)),
        voteComment: (comment, vote) => dispatch(voteComment(comment, vote)),
        addComment: (comment) => dispatch(addNewComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

function mapStateToProps(state, props) {
    let post = byId(state.entities.posts, props.match.params.post_id)

    return {
        loading: state.config.loading,
        loadingComments: state.config.loadingComments,
        post,
        comments: _orderBy(state.entities.comments, ['voteScore', 'timestamp'],['desc', 'desc'])
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))