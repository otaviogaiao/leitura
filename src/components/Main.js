import React, {Component} from 'react'

import {Grid, Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, Button,
       Pagination} from 'react-bootstrap'

import CategoryList from './CategoryList.js'
import PostList from './PostList.js'
import {Link, withRouter} from 'react-router-dom'

import {connect} from 'react-redux'
import {fetchCategories, fetchAllPosts, fetchAllPostsFromCategory, sortPosts} from '../actions'

import 'url-search-params-polyfill';

class Main extends Component {

    constructor(props){
        super(props)
        this.changeSort = this.changeSort.bind(this)
        this.order = this.order.bind(this)
        // console.log(props)
    }

    componentDidMount(){

        console.log(this.props.history)
        let path = this.props.history.location.pathname
        path = path.substr(1)
        console.log(path)
        if(path.length == 0){
            this.props.dispatch(fetchAllPosts())
        }else{
            this.props.dispatch(fetchAllPostsFromCategory(path))
        }
        // this.order(this.props.location.search)
    }


    componentDidUpdate(prevProps){
        console.log('oldProps', prevProps)
        console.log('newProps', this.props)
        if(prevProps.location.pathname !== this.props.location.pathname){
            let path = this.props.history.location.pathname
            path = path.substr(1)
            if(path.length == 0){
                this.props.dispatch(fetchAllPosts())
            }else{
                this.props.dispatch(fetchAllPostsFromCategory(path))
            }
               
        }
        if(prevProps.location.search !== this.props.location.search){
            this.order(prevProps.location.search)
        }
        
    }

    order(search){
        const by = new URLSearchParams(search);
        this.props.dispatch(sortPosts(by.get('sort')))
    }

    onSelect(){
        return 2
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
                <Row>
                    <Col md={12} lg={12}>
                    <Pagination
                        bsSize="medium"
                        items={10}
                        activePage={2}
                        onSelect={this.onSelect} />
                    </Col>
                </Row>
            </Grid>
        )
       
    }
}

// const MainWithRouter = withRouter(Main)

// const AppWithRouter = withRouter(App)
function mapStateToProps({categories, posts}){
    return {categories, posts}
}
  
export default withRouter(connect(mapStateToProps)(Main))