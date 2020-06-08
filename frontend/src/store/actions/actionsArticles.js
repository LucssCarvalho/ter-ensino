import { UPDATED_ARTICLES, EDIT_ARTICLE } from './actionsType'

import api from '../../services/api'

export const updatedArticles = () => {
  const response = api.get('/articles')

  return {
    type: UPDATED_ARTICLES,
    payload: response,
  }
}

export const setModeEditArticle = (value, id = null) => {
  return {
    type: EDIT_ARTICLE,
    payload: {
      modeValue: value,
      articleId: id,
    },
  }
}
