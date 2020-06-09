import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './EditAndShare.css'

import { getUser } from '../../../store/actions/actionsUser'

import User from './User/User'
import Article from './Article/Article'
import Profile from './Profile/Profile'

export default props => {
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)
  const articles = useSelector(store => store.articles)

  useEffect(() => {
    const action = getUser()
    dispatch(action)
  }, [dispatch])

  return (
    <section className='container-edit-and-share'>
      <div className='edit-and-share'>
        {!user.profileMode && !articles.modeEdit && (
          <h1 className='title-edit-and-share'>Compartilhe conhecimento:</h1>
        )}
        {!user.profileMode && articles.modeEdit && (
          <h1 className='title-edit-and-share'>Editando ensinamentos:</h1>
        )}
        {user.profileMode && (
          <h1 className='title-edit-and-share'>
            Editando informações do perfil:
          </h1>
        )}
        <User user={user.data} />
        {!user.profileMode && (
          <Article
            articles={articles}
            articleId={articles.articleEdit}
            modeEditArticle={articles.modeEdit}
          />
        )}
        {user.profileMode && <Profile user={user.data} />}
      </div>
    </section>
  )
}
