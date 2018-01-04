import React, {Component} from 'react'

import {connect} from 'react-redux'
import {addNewPost, getPostById, updatePost} from '../actions'
import { withRouter } from 'react-router-dom'

import PostForm from '../components/PostForm'
import { byId } from '../utils/helpers'

class PostFormContainer extends Component {

    constructor(props){
        super(props)
        this.savePost = this.savePost.bind(this)
    }

    componentDidMount(){
        const postId = this.props.match.params.post_id
        postId && this.props.getPost(postId)
    }

    savePost(post){
        const postId = this.props.match.params.post_id
        if(postId){
            this.props.updatePost(post).then(() => {
                this.props.history.push(`/${post.category}/${post.id}`)
            })
        }else{
            this.props.addNewPost(post).then(() => {
                this.props.history.push('/')
            })
        }


    }
    
    render(){
        const { loading, post, categories, history } = this.props
        return (
            loading ? <div>Loading....</div> 
                : <PostForm categories={categories} onSubmitAction={this.savePost}
                    onCancelAction={() => history.goBack()} post={post}/>
            )
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPost: (postId) => dispatch(getPostById(postId)),
        addNewPost: (post) => dispatch(addNewPost(post)),
        updatePost: (post) => dispatch(updatePost(post))
    }
}

function mapStateToProps(state, props){
    let post = byId(state.entities.posts, props.match.params.post_id)
    return {
        categories: state.entities.categories,
        loading: state.config.loading,
        post: post
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFormContainer))