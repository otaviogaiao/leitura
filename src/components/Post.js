import React from 'react'
import {Link} from 'react-router-dom'

import HeaderPost from './HeaderPost.js'

const Post = ({post}) => {
   const id = 1
   return (
       <div>
           <HeaderPost showActions={false} post={post}/>

          <Link to={`/${post.category}/${post.id}`}>Read more</Link>
       </div>
   )
}

export default Post