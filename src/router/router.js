import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Page from '../pages/Page.jsx'

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/test">首页</Link>
        </li>
        <li>
          <Link to="/test/page">Page</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/test" component={Home} />
        <Route path="/test/page" component={Page} />
      </Switch>
    </div>
  </Router>
)

export default getRouter
