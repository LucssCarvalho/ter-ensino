import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import { authReducer } from './reducers/authReducer'
import { articlesReducer } from './reducers/articlesReducer'
import { userReducer } from './reducers/userReducer'
import { themeModeReducer } from './reducers/themeModeReducer'

const reducers = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
  user: userReducer,
  themeMode: themeModeReducer,
})

const configStore = () => createStore(reducers, {}, applyMiddleware(promise))

export default configStore
