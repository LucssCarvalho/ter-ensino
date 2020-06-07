import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './EditAndShare.css'

import { getUser, updatedUser } from '../../../store/actions/actionsUser'

import User from './User/User'

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
        <h1>Compartilhe com a comunidade:</h1>
        <h1>Editando ensinamentos:</h1>
        {user.profileMode && <h1>Editando informações do perfil:</h1>}
        <User user={user.data} />
      </div>
    </section>
  )
}
