import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './Article.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const { id, title, imageURL, content, dateArticle, author } = props.article
  const [showFullArticle, setShowFullArticle] = useState(false)

  return (
    <div className='container-article' key={id}>
      <div className='header-article'>
        <div
          className='img-author'
          style={
            author.imageURL !== null
              ? {
                  backgroundImage: `url(${author.imageURL})`,
                }
              : {}
          }
        />
        <div className='information-header'>
          <div className='line-header-1'>
            <p>{author.name}</p>
            <p>{dateArticle}</p>
          </div>
          <h3
            className={`title-article ${
              darkMode ? 'font-color-theme-dark-global' : ''
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
      <div
        className={`content-article ${
          darkMode ? 'border-color-theme-dark-global' : ''
        }`}
      >
        <div
          className='img-article'
          style={
            imageURL !== null
              ? {
                  backgroundImage: `url(${imageURL})`,
                }
              : {}
          }
        />
        <p
          className={`content-text ${
            showFullArticle ? 'show-full-article' : ''
          } ${darkMode ? 'background-theme-dark-global' : ''}`}
        >
          {content}
        </p>
        <span
          onClick={() => setShowFullArticle(!showFullArticle)}
          className='label-show-full-article'
        >
          {!showFullArticle ? 'Continuar leitura +' : 'Recolher artigo -'}
        </span>
      </div>
    </div>
  )
}
