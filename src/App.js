import React, { Component } from 'react'
import './App.css'
import {PageHeader} from 'react-bootstrap'

import {Switch, Route, Link} from 'react-router-dom'

import MainContainer from './containers/MainContainer.js'
import PostContainer from './containers/PostContainer.js'
import PostFormContainer from './containers/PostFormContainer.js'

import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'

import {getCategories} from './actions'


class App extends Component {

  componentDidMount(){
    this.props.loadCategories()
  }

  render() {
    return (
      <div className="App">
        <PageHeader><Link to="/" style={{":hover": {textDecoration: 'none', color: 'inherit'}, 
        textDecoration: 'none', color: 'inherit'}}>Leitura</Link></PageHeader>
        <Switch>
          <Route exact path="/" component={MainContainer}/>
          <Route exact path="/:category" component={MainContainer} />
          <Route exact path="/posts/new" component={PostFormContainer} />
          <Route exact path="/:category/:post_id/edit" component={PostFormContainer} />
          <Route exact path="/:category/:post_id" component={PostContainer} />
        </Switch>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return {
      loadCategories: () => dispatch(getCategories())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
