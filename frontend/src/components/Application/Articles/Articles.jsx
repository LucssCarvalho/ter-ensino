import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Articles.css'

import { updatedArticles } from '../../../store/actions/actionsArticles'

import Article from './Article/Article'
import Search from './Search/Search'
import Categories from './Categories/Categories'

export default props => {
  const dispatch = useDispatch()

  const darkMode = useSelector(store => store.themeMode.darkMode)
  const articles = useSelector(store => store.articles)

  const [filterSearch, setFilterSearch] = useState('')
  const [filterRecents, setFilterRecents] = useState(true)
  const [filterCategory, setFilterCategory] = useState(articles.categories[0])

  useEffect(() => {
    const action = updatedArticles()
    dispatch(action)
  }, [dispatch])

  const renderArticles = (articles, filter, recents, category) => {
    let articlesCategory = [...articles]

    if (category.length !== 0) {
      articlesCategory = articlesCategory.filter(
        article => article.category === category
      )
    }

    if (filter.length === 0) {
      if (recents) {
        return articlesCategory.map(article => (
          <Article key={article.id} article={article} />
        ))
      } else {
        const oldFirst = [...articlesCategory]
        return oldFirst
          .reverse()
          .map(article => <Article key={article.id} article={article} />)
      }
    } else {
      const artFilter = articlesCategory.filter(
        article =>
          article.content.toLowerCase().includes(filter.toLowerCase()) ||
          article.title.toLowerCase().includes(filter.toLowerCase())
      )
      return artFilter.map(article => (
        <Article key={article.id} article={article} />
      ))
    }
  }

  return (
    <section
      className={`container-articles ${
        darkMode ? 'border-color-theme-dark-global' : ''
      }`}
    >
      <Categories
        categoryActive={filterCategory}
        categories={articles.categories}
        handleOnClick={setFilterCategory}
      />
      <Search
        value={filterSearch}
        placeholder='Buscar Ensinamentos'
        handleOnChange={setFilterSearch}
        onClickFilter={setFilterRecents}
        filterRecents={filterRecents}
      />
      {renderArticles(
        articles.data,
        filterSearch,
        filterRecents,
        filterCategory
      )}
    </section>
  )
}
