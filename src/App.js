import React, { Component } from 'react'
import './App.css'
import {PageHeader} from 'react-bootstrap'

import {Switch, Route, Link} from 'react-router-dom'

import Main from './components/Main.js'
import ShowPost from './components/ShowPost.js'
import NewPost from './components/NewPost.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader><Link to="/" style={{":hover": {textDecoration: 'none', color: 'inherit'}, 
        textDecoration: 'none', color: 'inherit'}}>Leitura</Link></PageHeader>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/categories/:id" component={Main} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/posts/:id" component={ShowPost} />
        </Switch>
      </div>
    )
  }
}

export default App
