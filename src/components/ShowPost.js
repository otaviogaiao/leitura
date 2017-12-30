import React, {Component} from 'react'


import {Grid, Row, Col, ButtonToolbar, Button, FormControl} from 'react-bootstrap'

import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import CommentList from './CommentList.js'
import HeaderPost from './HeaderPost.js'

import { getPost, getAllComments } from '../Api'
import { loading } from '../actions'


class ShowPost extends Component {

    state = {
        editing: false,
        loadingComments: true,
        post: null,
        comments: [],
        errorLoadingComments: false
    }

    edit = () => {
        this.setState((oldState) => {
            return {editing: !oldState.editing}
        })
    }

    componentDidMount(){
        this.props.dispatch(loading(true))
        const  postId = this.props.match.params.post_id
        getPost(postId).then(( post ) => {
            this.setState({ post }, () => this.props.dispatch(loading(false)))
        })
        getAllComments(postId).then((comments) => {
            this.setState({ comments, loadingComments: false })
        }).catch( erro => {
            this.setState({ loadingComments: false, errorLoadingComments: true})
        })
    }
    
    render(){
        const { post, comments } = this.state

        if(this.props.loading || !post)
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
                          <FormControl componentClass="textarea" style={{ minHeight: 200 }} /><br/>
                          <Button bsStyle="primary" style={{float: 'left'}}>Save</Button>
                      </form>
                      <br />
                      <CommentList comments={comments}/>
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

function mapStateToProps(state) {
    return {
        loading: state.config.loading
    }
}

export default withRouter(connect(mapStateToProps)(ShowPost))