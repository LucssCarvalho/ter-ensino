//Notificações
import { toast } from 'react-toastify'

import { UPDATED_ARTICLES, EDIT_ARTICLE } from '../actions/actionsType'

const INITIAL_STATE = {
  data: [],
  categories: [
    'Programação',
    'Leitura',
    'Excel',
    'Hábitos',
    'Esportes',
    'Biologia',
    'Historia',
    'Matemática',
  ],
  modeEdit: false,
  articleEdit: null,
}

export const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATED_ARTICLES:
      if (action.payload.data) {
        return { ...state, data: action.payload.data.articles }
      }
      toast.error(action.payload.response.data.error)
      return state
    case EDIT_ARTICLE:
      return {
        ...state,
        modeEdit: action.payload.modeValue,
        articleEdit: action.payload.articleId,
      }
    default:
      return state
  }
}
