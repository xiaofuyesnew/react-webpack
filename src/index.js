import React from 'react'
import ReactDOM from 'react-dom'

// import App from './components/App.jsx'
import getRouter from './router/router.js'

import css from './css/index.css'

ReactDOM.render(getRouter(), document.getElementById('app'))