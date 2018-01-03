import {combineReducers} from 'redux'

import {GET_CATEGORIES, GET_ALL_POSTS, 
    GET_POST_BY_ID, ADD_POST, LOADING, VOTE_POST, LOADING_COMMENTS, GET_COMMENTS,
    ADD_COMMENT, VOTE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, UPDATE_POST, 
    DELETE_POST} from '../actions'

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
    let aux, index
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
        case UPDATE_POST:
            aux = posts.concat([])
            index = posts.findIndex((p) => p.id === action.post.id)
            aux[index] = action.post
            return {
                ...state,
                posts: aux
            }
        case DELETE_POST:
            return {
                ...state,
                posts: posts.filter((p) =>  p.id !== action.id)
            }
        case GET_POST_BY_ID:
            return {
                ...state,
                posts: [action.post]
            }
        case VOTE_POST:
            aux = posts.concat([])
            index = aux.findIndex((valor) => valor.id === action.postId)
            aux[index] = {...aux[index], voteScore: action.vote === 'upVote' ? aux[index].voteScore + 1 : aux[index].voteScore - 1}
            return {
                ...state,
                posts: aux
            }
        case GET_COMMENTS: 
            return {
                ...state,
                comments: action.comments
            }
        case ADD_COMMENT:
            aux = posts.concat([])
            index = posts.findIndex((p) => p.id === action.comment.parentId)
            aux[index] = {...aux[index], commentCount: aux[index].commentCount + 1}
            return {
                ...state,
                posts: aux,
                comments: comments.concat(action.comment)
            }
        case UPDATE_COMMENT:
            aux = comments.concat([])
            index = comments.findIndex((c) => c.id === action.comment.id)
            aux[index] = action.comment
            return {
                ...state,
                comments: aux
            }
        case DELETE_COMMENT:
            aux = posts.concat([])
            let deletedComment = comments.filter((c) => c.id === action.id)[0]
            index = posts.findIndex((p) => p.id === deletedComment.parentId)
            aux[index] = {...aux[index], commentCount: aux[index].commentCount - 1}
            return {
                ...state,
                posts: aux,
                comments: comments.filter((c) => c.id !== action.id)
            }
        case VOTE_COMMENT:
            aux = comments.concat([])
            index = aux.findIndex((valor) => valor.id === action.commentId)
            aux[index] = {...aux[index], voteScore: action.vote === 'upVote' ? aux[index].voteScore + 1 : aux[index].voteScore - 1}
            
            return {
                ...state,
                comments: aux
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