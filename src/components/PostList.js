import React, {Component} from 'react'
import Post from './Post.js'
import PropTypes from 'prop-types'

class PostList extends Component {
    

    render() {
        let { posts, onVoteAction }= this.props
        return (
            <div>
                {posts.length > 0 && posts.map(post => <Post key={post.id} post={post} onVoteAction={(vote) => onVoteAction(post.id, vote)} />)}
                {posts.length === 0 && <div>There are no posts to show</div>}
            </div>
           
        )
    }
}

export default PostList

PostList.propTypes = {
    posts: PropTypes.array,
    onVoteAction: PropTypes.func
}