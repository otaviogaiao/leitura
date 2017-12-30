import React, {Component} from 'react'
import Post from './Post.js'

class PostList extends Component {
    

    render() {
        let { posts }= this.props
        return (
            <div>
                {posts.length > 0 && posts.map(post => <Post key={post.id} post={post}/>)}
                {posts.length === 0 && <div>There are no posts to show</div>}
            </div>
           
        )
    }
}

export default PostList