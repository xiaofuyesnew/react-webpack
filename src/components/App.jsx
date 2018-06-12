import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from '../pages/Home.jsx'
import Page from '../pages/Page.jsx'

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/Page" component={Page} />
      </Router>
    )
  }
}
