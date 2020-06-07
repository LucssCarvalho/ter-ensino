import { SIGNIN_USER, VALIDATE_TOKEN } from './actionsType'

import api from '../../services/api'

export const signin = user => {
  const response = api.post('/signin', { ...user })
  return {
    type: SIGNIN_USER,
    payload: response,
  }
}

export const validateToken = token => {
  api.defaults.headers.common['authorization'] = token
  const response = api.post('/validateToken')
  return {
    type: VALIDATE_TOKEN,
    payload: response,
  }
}
