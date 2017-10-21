import {combineReducers} from 'redux'

import {GET_CATEGORIES, GET_ALL_POSTS, GET_ALL_POSTS_FROM_CATEGORY, SORT_POSTS, 
    GET_POST_BY_ID, ADD_POST} from '../actions'

const initialState = {
    categories: [],
    posts: [],
    selectedPost: {}
}

function categories(state = {}, action){
    switch(action.type){
        case GET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

function posts(state = {}, action){
    switch(action.type){
        case GET_ALL_POSTS:
            return  action.posts
        case GET_ALL_POSTS_FROM_CATEGORY:
            return  action.posts
        case SORT_POSTS:
            return action.by === 'score' ? 
                                state.sort((a, b) => a.voteScore < b.voteScore) :
                                state.sort((a, b) => a.timestamp < b.timestamp)
        case ADD_POST:
            return state.posts.push(action.post)
        default:
            return state
    }
}

function selectedPost(state = {}, action){
    console.log('post', state)
    switch(action.type){
        case GET_POST_BY_ID:
            return {} //pegar o post do array de posts pelo ID
        default:
            return state
    }
}

export default combineReducers(
    {
        categories,
        posts,
        selectedPost
    }
)