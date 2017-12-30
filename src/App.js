import React, { Component } from 'react'
import './App.css'
import {PageHeader} from 'react-bootstrap'

import {Switch, Route, Link} from 'react-router-dom'

import Main from './components/Main.js'
import ShowPost from './components/ShowPost.js'
import NewPost from './components/NewPost.js'

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
          <Route exact path="/" component={Main}/>
          <Route exact path="/:category" component={Main} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/:category/:post_id" component={ShowPost} />
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
