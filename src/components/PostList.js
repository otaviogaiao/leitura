import React, {Component} from 'react'
import Post from './Post.js'

class PostList extends Component {

    render() {
        return (
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
           
        )
    }
}

export default PostList