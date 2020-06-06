import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './global.css'

import { Provider } from 'react-redux'

import App from './pages/App'

import configStore from './store/storeConfig'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
