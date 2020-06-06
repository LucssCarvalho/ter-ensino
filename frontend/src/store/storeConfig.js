import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import { authReducer } from './reducers/authReducer'

const reducers = combineReducers({
  auth: authReducer,
})

const configStore = () => createStore(reducers, {}, applyMiddleware(promise))

export default configStore
