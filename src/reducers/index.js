import {combineReducers} from 'redux'

import {GET_CATEGORIES, GET_ALL_POSTS, 
    GET_POST_BY_ID, ADD_POST, LOADING, VOTE_POST, LOADING_COMMENTS, GET_COMMENTS,
    ADD_COMMENT, VOTE_COMMENT} from '../actions'

const entityInitialState = {
    categories: [],
    posts: [],
    comments: []
}

const configInitialState = {
    loading: false,
    loadingComments: false
}

function entityReducer(state = entityInitialState, action){
    let { posts, comments } = state
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case ADD_POST:
            return {
                ...state,
                posts: posts.concat(action.post)
            }
        case GET_POST_BY_ID:
            return {
                ...state,
                posts: [action.post]
            }
        case VOTE_POST:
            let p = posts.concat([])
            let index = p.findIndex((valor) => valor.id === action.postId)
            p[index].voteScore = action.vote === 'upVote' ? p[index].voteScore + 1 : p[index].voteScore - 1
            return {
                ...state,
                posts: p
            }
        case GET_COMMENTS: 
            return {
                ...state,
                comments: action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.comment)
            }
        case VOTE_COMMENT:
            return {
                ...state,
                comments: Object.assign([], comments, action.comment)
            }
        default:
            return state
    }
}

function configReducer(state = configInitialState, action){
    switch(action.type){
        case LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case LOADING_COMMENTS: 
            return {
                ...state,
                loadingComments: action.loadingComments
            }
        default:
            return state
    }
}

export default combineReducers(
    {
        entities: entityReducer,
        config: configReducer
    }
)