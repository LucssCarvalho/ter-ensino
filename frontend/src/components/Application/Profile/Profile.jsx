import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import './Profile.css'

import api from '../../../services/api'

import { getUser, profileMode } from '../../../store/actions/actionsUser'
import { showEditAndShare } from '../../../store/actions/actionsButtonFloat'
import {
  updatedArticles,
  setModeEditArticle,
} from '../../../store/actions/actionsArticles'

import InformationsUser from './InformationsUser/InformationsUser'
import ArticlesUser from './ArticlesUser/ArticlesUser'

export default props => {
  const dispatch = useDispatch()

  const darkMode = useSelector(store => store.themeMode.darkMode)

  const user = useSelector(store => store.user)
  const articles = useSelector(store => store.articles)

  useEffect(() => {
    const actionGetUser = getUser()
    dispatch(actionGetUser)

    const actionGetArticles = updatedArticles()
    dispatch(actionGetArticles)
  }, [dispatch])

  const editProfile = () => {
    const actionModeEditProfile = profileMode(true)
    dispatch(actionModeEditProfile)

    const actionShowEditAndShare = showEditAndShare(true)
    dispatch(actionShowEditAndShare)
  }

  const editArticle = id => {
    const actionModeEditArticle = setModeEditArticle(true, id)
    dispatch(actionModeEditArticle)

    const actionShowEditAndShare = showEditAndShare(true)
    dispatch(actionShowEditAndShare)
  }

  const deleteArticle = async id => {
    if (id) {
      const response = await api.delete(`/articles/${id ? id : ''}`)

      if (response.data.error) toast.error(response.data.error)

      const actionGetArticles = updatedArticles()
      dispatch(actionGetArticles)

      return toast.success(response.data.message)
    }
  }

  const filterArticlesUser = (articles, user, count = false) => {
    let artCopy = [...articles]
    if (artCopy.length !== 0) {
      artCopy = artCopy.filter(article => article.author.id === user.id)

      if (count) return artCopy.length

      return artCopy
    }

    if (count) return 0

    return
  }

  return (
    <section
      className={`container-profile ${
        darkMode ? 'border-color-theme-dark-global' : ''
      }`}
    >
      <h1 className='header-profile-title'>{`Informações sobre ${user.data.name}`}</h1>
      <InformationsUser
        user={user}
        articles={articles}
        onClickEditProfile={editProfile}
        filterArticlesUser={filterArticlesUser}
      />
      <ArticlesUser
        articles={articles}
        user={user}
        onClickEditArticle={editArticle}
        onClickDeleteArticle={deleteArticle}
        filterArticlesUser={filterArticlesUser}
      />
    </section>
  )
}
