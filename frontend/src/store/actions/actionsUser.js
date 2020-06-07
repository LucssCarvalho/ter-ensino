import { UPDATED_USER, PROFILE_MODE } from './actionsType'

import api from '../../services/api'

const updatedState = (method, values) => {
  const response = api[method]('/user', values ? { ...values } : {})

  return {
    type: UPDATED_USER,
    payload: response,
  }
}

export const getUser = () => {
  return updatedState('get')
}

export const updatedUser = values => {
  return updatedState('put', values)
}

export const profileMode = value => {
  return { type: PROFILE_MODE, payload: value }
}
