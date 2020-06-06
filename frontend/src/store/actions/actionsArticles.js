import { UPDATED_ARTICLES } from './actionsType'

import api from '../../services/api'

export const updatedArticles = () => {
  const response = api.get('/articles')

  return {
    type: UPDATED_ARTICLES,
    payload: response,
  }
}
