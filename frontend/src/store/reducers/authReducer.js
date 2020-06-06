//Notificações
import { toast } from 'react-toastify'

import { SIGNIN_USER, VALIDATE_TOKEN } from '../actions/actionsType'

const INITIAL_STATE = {
  token: JSON.parse(localStorage.getItem('userToken')),
  valid: false,
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      if (action.payload.data) {
        localStorage.setItem(
          'userToken',
          JSON.stringify(action.payload.data.token)
        )
        return { ...state, token: action.payload.data.token }
      }
      toast.error(action.payload.response.data.error)
      return state
    case VALIDATE_TOKEN:
      if (action.payload.data.valid) {
        return { ...state, valid: action.payload.data.valid }
      } else {
        localStorage.removeItem('userToken')
        return { ...state, valid: false }
      }
    default:
      return state
  }
}
