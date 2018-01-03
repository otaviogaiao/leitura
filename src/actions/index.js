
import {getAllCategories, getAllPosts as getAllPostsApi, getCategoryPosts, addPost,
    votePost as votePostApi, getPost, getAllComments, addComment, voteComment as voteCommentApi,
    updateComment as updateCommentApi, deleteComment as deleteCommentApi} from '../Api.js'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ALL_POSTS_FROM_CATEGORY = 'GET_ALL_POSTS_FROM_CATEGORY'
export const SORT_POSTS = 'SORT_POSTS'
export const GET_POST_BY_ID = 'GET_POST_BY_ID'
export const ADD_POST = 'ADD_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const LOADING = 'LOADING'
export const LOADING_COMMENTS = 'LOADING_COMMENTS'
export const VOTE_POST = 'VOTE_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export function getPostById(postId){
    return function(dispatch){
        loading(true)
        return getPost(postId).then(( post ) => {
            loading(false)
            return dispatch({
                type: GET_POST_BY_ID, 
                post
            })
        })
    }
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

export function getComments(postId){
    return function(dispatch){
        loadingComments(true)
        return getAllComments(postId).then(comments => {
            loadingComments(false)
            return dispatch({
                type: GET_COMMENTS,
                comments
            })
        })
    }
}

export function addNewComment(comment){
    return function(dispatch){
        return addComment(comment).then(() => {
            return dispatch({
                type: ADD_COMMENT,
                comment
            })
        })
    }
}

export function updateComment(comment) {
    return function(dispatch){
        return updateCommentApi(comment).then(() => {
            return dispatch({
                type: UPDATE_COMMENT,
                comment
            })
        })
    }
}

export function deleteComment(id) {
    return function(dispatch){
        return deleteCommentApi(id).then(() => {
            return dispatch({
                type: DELETE_COMMENT,
                id
            })
        })
    }
}

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

export function voteComment(comment, vote){
    return function (dispatch) {
        return voteCommentApi(comment.id, vote)
            .then(() => {
                return dispatch({
                    type: VOTE_COMMENT,
                    commentId: comment.id,
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

export function loadingComments(load){
    return {
        type: LOADING_COMMENTS,
        loadingComments: load
    }
}