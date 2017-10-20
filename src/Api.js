
const url = `http://localhost:3001`
const token = '3lloj8141sdfa56423sdf55232'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
  }


export const getAllCategories = () => 
     fetch(`${url}/categories`, {headers})
        .then(res => res.json())


export const getCategoryPosts = (category) => 
    fetch(`${url}/${category}/posts`, {headers})
    .then(res => res.json())

export const getAllPosts = () => 
    fetch(`${url}/posts`, {headers})
       .then(res => res.json())

export const addPost = (post) => 
    fetch(`${url}/posts`, {
        headers: {...headers},
        method: 'POST',
        body: JSON.stringify({post})
    })
      .then(res => res.json())

export const getPost = (postId) =>
    fetch(`${url}/posts/${postId}`, {headers})
        .then(res => res.json())

export const votePost = (postId, vote) => 
    fetch(`${url}/posts/${postId}`, {
         headers: {...headers},
         method: 'POST',
         body: JSON.stringify({vote})
        })
        .then(res => res.json())

export const updatePost = (post) => 
    fetch(`${url}/posts/${post.id}`, {
        headers: {...headers},
        method: 'PUT',
        body: JSON.stringify({title: post.title, body: post.body})
    })
    .then(res => res.json())

export const deletePost = (postId) => 
    fetch(`${url}/posts/${postId}`, {
        headers: {...headers},
        method: 'DELETE'
    })
    .then(res => res.json())

export const getAllComments = (postId) =>
    fetch(`${url}/posts/${postId}/comments`, {headers})
    .then(res => res.json())

export const addComment = (comment) => 
    fetch(`${url}/comments`, {
         headers: {...headers},
         method: 'POST',
         body: JSON.stringify({comment})
        })
        .then(res => res.json())

export const getComment = (commentId) =>
    fetch(`${url}/comments/${commentId}`, {headers})
    .then(res => res.json())

export const voteComment = (commentId, vote) => 
    fetch(`${url}/comments/${commentId}`, {
         headers: {...headers},
         method: 'POST',
         body: JSON.stringify({vote})
        })
        .then(res => res.json())

export const updateComment = (comment) => 
     fetch(`${url}/comments/${comment.id}`, {
            headers: {...headers},
            method: 'PUT',
            body: JSON.stringify({timestamp: comment.timestamp, body: comment.body})
        })
        .then(res => res.json())

export const deleteComment = (commentId) => 
     fetch(`${url}/comments/${commentId}`, {
            headers: {...headers},
            method: 'DELETE'
        })
        .then(res => res.json())