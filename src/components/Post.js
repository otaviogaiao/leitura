import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import HeaderPost from './HeaderPost.js'

const Post = ({post}) => {
   return (
       <div>
           <HeaderPost showActions={false} post={post}/>

          <Link to={`/${post.category}/${post.id}`}>Read more</Link>
       </div>
   )
}

export default Post

Post.propTypes = {
    post: PropTypes.object.isRequired
}