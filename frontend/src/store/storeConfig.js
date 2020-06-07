import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import { authReducer } from './reducers/authReducer'
import { articlesReducer } from './reducers/articlesReducer'

const reducers = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
})

const configStore = () => createStore(reducers, {}, applyMiddleware(promise))

export default configStore
