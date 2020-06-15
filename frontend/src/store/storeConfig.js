import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import { authReducer } from './reducers/authReducer'
import { articlesReducer } from './reducers/articlesReducer'
import { userReducer } from './reducers/userReducer'
import { themeModeReducer } from './reducers/themeModeReducer'
import { buttonFloatReducer } from './reducers/buttonFloatReducer'

const reducers = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
  user: userReducer,
  themeMode: themeModeReducer,
  buttonFloat: buttonFloatReducer,
})

const configStore = () => createStore(reducers, {}, applyMiddleware(promise))

export default configStore
