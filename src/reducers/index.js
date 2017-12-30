import {combineReducers} from 'redux'

import {GET_CATEGORIES, GET_ALL_POSTS, 
    GET_POST_BY_ID, ADD_POST, LOADING, VOTE_POST} from '../actions'

const entityInitialState = {
    categories: [],
    posts: [],
    selectedPost: null
}

const configInitialState = {
    loading: false
}

function entityReducer(state = entityInitialState, action){
    let { posts } = state
    console.log('state',  state)
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
                selectedPost: action.post
            }
        case VOTE_POST:
            let post = posts.reduce((acc, atual) => {
                if(atual.id === action.postId){
                    return atual
                }
                return acc
            })
            return {
                ...state,
                selectedPost: post
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

// function categories(state = {}, action){
//     switch(action.type){
//         case GET_CATEGORIES:
//             return {
//                 ...state,
//                 categories: action.categories
//             }
//         default:
//             return state
//     }
// }

// function posts(state = {}, action){
//     switch(action.type){
//         case GET_ALL_POSTS:
//             return  action.posts
//         case GET_ALL_POSTS_FROM_CATEGORY:
//             return  action.posts
//         case SORT_POSTS:
//             return action.by === 'score' ? 
//                                 state.sort((a, b) => a.voteScore < b.voteScore) :
//                                 state.sort((a, b) => a.timestamp < b.timestamp)
//         case ADD_POST:
//             return state.posts.push(action.post)
//         default:
//             return state
//     }
// }

// function selectedPost(state = {}, action){
//     console.log('post', state)
//     switch(action.type){
//         case GET_POST_BY_ID:
//             return {} //pegar o post do array de posts pelo ID
//         default:
//             return state
//     }
// }

