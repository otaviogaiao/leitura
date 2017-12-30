
import {getAllCategories, getAllPosts as getAllPostsApi, getCategoryPosts, addPost,
    votePost as votePostApi} from '../Api.js'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_POSTS_FROM_CATEGORY = 'GET_ALL_POSTS_FROM_CATEGORY'
export const SORT_POSTS = 'SORT_POSTS'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const ADD_POST = 'ADD_POST'
export const LOADING = 'LOADING'
export const VOTE_POST = 'VOTE_POST'

// export function getCategories(categories){
//     return {type: GET_CATEGORIES, categories}
// }

// export function getAllPosts(posts){
//     return {type: GET_ALL_POSTS, posts}
// }

// export function getAllPostsFromCategory(posts){
//     return {type: GET_ALL_POSTS_FROM_CATEGORY, posts}
// }

export function getPostById(postId){
    return {type: GET_POST_BY_ID, postId}
}

export function getCategories(){
    return dispatch => {
        loading(true)
        return getAllCategories().then(data => {
            loading(false)
            return dispatch({type: GET_CATEGORIES, categories: data}) 
        })
    }
}

export function getAllPosts(){
    return dispatch => {
        loading(true)
        return getAllPostsApi().then(data => {
            loading(false)
            return dispatch({type: GET_ALL_POSTS, posts: data})
        })
    }
}

export function getAllPostsFromCategory(categoryId){
    return dispatch => {
        loading(true)
        return getCategoryPosts(categoryId).then(data => {
            loading(false)
            return dispatch({type: GET_ALL_POSTS, posts: data})
        })
    }
}

// export function fetchAllPostsFromCategory(categoryId){
//     return dispatch => {
//         return getCategoryPosts(categoryId).then(data => dispatch(getAllPostsFromCategory(data)))
//     }
// }

// export function sortPosts(by){
//     return dispatch => {
//         dispatch({type: SORT_POSTS, by})
//     }
// }

export function addNewPost(post){
    return dispatch => {
        return addPost(post).then(data => dispatch({type: ADD_POST, post}))
    }
}

export function votePost(postId, vote){
    return function(dispatch) {
        return votePostApi(postId, vote).then(() => {
            return dispatch({
                type: VOTE_POST,
                postId,
                vote
            })
        })
    }
}

export function loading(load){
    return {
        type: LOADING,
        loading: load
    }
}