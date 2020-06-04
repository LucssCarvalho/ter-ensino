import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './global.css'

import App from './pages/App'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
