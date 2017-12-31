import React, {Component} from 'react'


import {Grid, Row, Col, ButtonToolbar, Button, FormControl } from 'react-bootstrap'

import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import CommentList from './CommentList.js'
import HeaderPost from './HeaderPost.js'
import CommentForm from './CommentForm'

import { byId } from '../utils/helpers'

import { getPostById, getComments } from '../actions'


class ShowPost extends Component {

    state = {
        editing: false,
        comment: ''
    }

    edit = () => {
        this.setState((oldState) => {
            return {editing: !oldState.editing}
        })
    }

    componentDidMount(){
        const postId = this.props.match.params.post_id
        this.props.getPost(postId)
        this.props.getAllComments(postId)
    }
    
    render(){
        const { post, comments, loading, loadingComments } = this.props
        console.log('comments', comments)
        if(loading || !post)
            return <div>Loading...</div>


        return (
           <Grid>
               <Row>
                   <Col md={9} lg={9}>
                      <div>
                          {!this.state.editing &&
                           ([<HeaderPost key='header' onEdit={this.edit} showActions={true} 
                                post={post}/>,
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
                          <CommentForm />
                      </form>
                      <br />
                    
                      {loadingComments
                        ? <p>Loading comments ...</p>
                        :  <CommentList comments={comments} />
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
        getAllComments: (postId) => dispatch(getComments(postId))
    }
}

function mapStateToProps(state, props) {
    let post = byId(state.entities.posts, props.match.params.post_id)
    console.log('state', state)
    return {
        loading: state.config.loading,
        loadingComments: state.config.loadingComments,
        post: Object.assign({}, post),
        comments: state.entities.comments
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowPost))