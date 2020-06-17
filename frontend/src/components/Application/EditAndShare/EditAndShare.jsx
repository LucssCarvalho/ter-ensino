import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosClose } from 'react-icons/io'

import './EditAndShare.css'

import { getUser } from '../../../store/actions/actionsUser'
import { showEditAndShare } from '../../../store/actions/actionsButtonFloat'

import User from './User/User'
import Article from './Article/Article'
import Profile from './Profile/Profile'

export default props => {
  const dispatch = useDispatch()

  const darkMode = useSelector(store => store.themeMode.darkMode)
  const showEditShare = useSelector(store => store.buttonFloat.showEditEndShare)

  const user = useSelector(store => store.user)
  const articles = useSelector(store => store.articles)

  const [mobileMode, setMobileMode] = useState(false)

  useEffect(() => {
    const action = getUser()
    dispatch(action)
  }, [dispatch])

  const handleHiddenEditAndShare = value => {
    const action = showEditAndShare(value)
    dispatch(action)
  }

  useEffect(() => {
    window.onresize = () => handleSizeWidth()
    handleSizeWidth()
  })

  const handleSizeWidth = () => {
    if (window.innerWidth < 852) {
      setMobileMode(true)
    } else {
      setMobileMode(false)
    }
  }

  return (
    <section
      className={`container-edit-and-share ${
        mobileMode ? (showEditShare ? 'show-container-edit-and-share' : '') : ''
      }`}
    >
      {mobileMode && showEditShare && !user.profileMode && !articles.modeEdit && (
        <div
          onClick={() => handleHiddenEditAndShare(false)}
          className='close-button-edit-and-share'
        >
          <IoIosClose size={50} />
        </div>
      )}
      <div
        className={`edit-and-share ${
          darkMode ? 'background-edit-and-share-theme-dark-global' : ''
        }`}
      >
        <div className='group-title-and-user'>
          {!user.profileMode && !articles.modeEdit && (
            <h1
              className={`title-edit-and-share ${
                darkMode ? 'font-color-theme-dark-global' : ''
              }`}
            >
              Compartilhe conhecimento:
            </h1>
          )}
          {!user.profileMode && articles.modeEdit && (
            <h1
              className={`title-edit-and-share ${
                darkMode ? 'font-color-theme-dark-global' : ''
              }`}
            >
              Editando ensinamentos:
            </h1>
          )}
          {user.profileMode && (
            <h1
              className={`title-edit-and-share ${
                darkMode ? 'font-color-theme-dark-global' : ''
              }`}
            >
              Editando informações do perfil:
            </h1>
          )}
          <User user={user.data} />
        </div>
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
