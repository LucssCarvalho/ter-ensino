//Notificações
import { toast } from 'react-toastify'

import { UPDATED_USER, PROFILE_MODE } from '../actions/actionsType'

const INITIAL_STATE = {
  data: {},
  profileMode: false,
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATED_USER:
      if (action.payload.data) {
        return { ...state, data: action.payload.data }
      }
      toast.error(action.payload.response.data.error)
      return state
    case PROFILE_MODE:
      return { ...state, profileMode: action.payload.data }
    default:
      return state
  }
}
