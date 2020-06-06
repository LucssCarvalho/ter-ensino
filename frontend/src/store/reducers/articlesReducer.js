//Notificações
import { toast } from 'react-toastify'

import { UPDATED_ARTICLES } from '../actions/actionsType'

const INITIAL_STATE = {
  data: [],
}

export const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATED_ARTICLES:
      if (action.payload.data) {
        return { ...state, data: action.payload.data.articles }
      }
      toast.error(action.payload.response.data.error)
      return state
    default:
      return state
  }
}
