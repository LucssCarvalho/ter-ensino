import React from 'react'
import { useSelector } from 'react-redux'

import './ArticlesUser.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const {
    articles,
    user,
    filterArticlesUser,
    onClickEditArticle,
    onClickDeleteArticle,
  } = props

  const renderArticlesUser = (articles, user, fnFilter, fnEdit, fnDelete) => {
    if (articles.length !== 0) {
      const artCopy = [...articles]
      const artFilter = fnFilter(artCopy, user)

      return artFilter.map((article, index) => (
        <div key={index} className='article-user-item'>
          <div className='article-informations-and-user'>
            <div
              style={
                article.imageURL !== null
                  ? {
                      backgroundImage: `url(${article.imageURL})`,
                    }
                  : {}
              }
              className='article-image-article-user'
            ></div>
            <div className='author-and-article-information'>
              <div className='author-and-date-article'>
                <p>{article.author.name}</p>
                <p className='date-article-profile-user'>
                  {article.dateArticle}
                </p>
              </div>
              <p
                className={`title-article-user-profile ${
                  darkMode ? 'font-color-theme-dark-global' : ''
                }`}
              >
                {article.title}
              </p>
            </div>
          </div>
          <div className='article-item-buttons'>
            <button
              onClick={() => fnEdit(article.id)}
              className='edit-button-article'
            >
              Editar
            </button>
            <button
              onClick={() => fnDelete(article.id)}
              className='delete-button-article'
            >
              Excluir
            </button>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className='profile-user-articles'>
      <h1 className='title-profile-user-article'>Ensinamentos</h1>
      {renderArticlesUser(
        articles.data,
        user.data,
        filterArticlesUser,
        onClickEditArticle,
        onClickDeleteArticle
      )}
    </div>
  )
}
