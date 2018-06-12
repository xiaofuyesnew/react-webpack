import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../pages/Home/Home.jsx'
import Page from '../pages/Page/Page.jsx'

const getRouter = () => {
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/" />
        </li>
        <li>
          <Link to="/page" />
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
      </Switch>
    </div>
  </Router>
}

export default getRouter
