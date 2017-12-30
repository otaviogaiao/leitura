import React, {Component} from 'react'

import {Grid, Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap'

import CategoryList from './CategoryList.js'
import PostList from './PostList.js'
import {Link, withRouter} from 'react-router-dom'

import {connect} from 'react-redux'
import {getAllPosts, getAllPostsFromCategory } from '../actions'

import 'url-search-params-polyfill';

class Main extends Component {

    constructor(props){
        super(props)
        this.changeSort = this.changeSort.bind(this)
    }

    componentDidMount(){
        this.loadData()
    }


    componentDidUpdate(prevProps){
        if(prevProps.location.pathname !== this.props.location.pathname){
           this.loadData()
        }
    }

    loadData = () => {
        let path = this.props.history.location.pathname
        path = path.substr(1)
        if(path.length === 0){
            this.props.getPosts()
        }else{
            this.props.getPostsByCategory(path)
        }
    }

    changeSort(value){
        this.props.history.push('?sort='+value)
    }

    render(){
        return (
            <Grid>
                <Row>
                    <Col md={4} lg={4} ><CategoryList categories={this.props.categories}/></Col>
                    <Col md={4} lg={4}><PostList posts={this.props.posts}/></Col>
                    <Col md={4} lg={4}>
                        <Row>
                            <Col md={6}>
                                <span>Order by</span>
                            </Col>
                            <Col md={6}>
                                <div>             
                                        <ButtonToolbar>
                                                <ToggleButtonGroup type="radio" name="sortBy" defaultValue={'date'}
                                                 onChange={this.changeSort}>
                                                    <ToggleButton value={'score'}>
                                                        Score
                                                    </ToggleButton>
                                                    <ToggleButton value={'date'}>
                                                        Date
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                        </ButtonToolbar>
                                        <br />
                                        <ButtonToolbar>
                                             <Link to="/posts/new" style={{":hover": {textDecoration: 'none', color: 'inherit'}, 
        textDecoration: 'none', color: 'inherit'}}>
                                                <Button bsStyle="primary">                        
                                                        New Post
                                                </Button>
                                            </Link>
                                        </ButtonToolbar>
                                       
                                    </div>
                            </Col>
                           
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
       
    }
}

// const MainWithRouter = withRouter(Main)
function mapDispatchToProps(dispatch){
    return {
        getPosts: () => dispatch(getAllPosts()),
        getPostsByCategory: (c) => dispatch(getAllPostsFromCategory(c))
    }
}


// const AppWithRouter = withRouter(App)
function mapStateToProps(state, ownProps){
    let { categories, posts } = state.entities
    const by = new URLSearchParams(ownProps.location.search)
    by.get('sort') === 'score' 
        ? posts = [...posts].sort((a, b) => a.voteScore < b.voteScore)
        : posts = [...posts].sort((a, b) => a.timestamp < b.timestamp)


    return {categories, posts}
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))