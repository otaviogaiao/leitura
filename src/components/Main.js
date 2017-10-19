import React, {Component} from 'react'

import {Grid, Row, Col, ButtonToolbar, ToggleButtonGroup, ToggleButton, Button,
       Pagination} from 'react-bootstrap'

import CategoryList from './CategoryList.js'
import PostList from './PostList.js'
import {Link, withRouter} from 'react-router-dom'

class Main extends Component {

    constructor(props){
        super(props)
        this.changeSort = this.changeSort.bind(this)
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
                    <Col md={4} lg={4} ><CategoryList /></Col>
                    <Col md={4} lg={4}><PostList /></Col>
                    <Col md={4} lg={4}>
                        <Row>
                            <Col md={6}>
                                <span>Order by</span>
                            </Col>
                            <Col md={6}>
                                <div>             
                                        <ButtonToolbar>
                                                <ToggleButtonGroup type="radio" name="sortBy" defaultValue={'score'}
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

const MainWithRouter = withRouter(Main)
export default MainWithRouter