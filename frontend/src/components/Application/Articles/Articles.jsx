import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Articles.css'

import { updatedArticles } from '../../../store/actions/actionsArticles'

import Article from './Article/Article'
import Search from './Search/Search'
import Categories from './Categories/Categories'

export default props => {
  const [filterSearch, setFilterSearch] = useState('')
  const [filterRecents, setFilterRecents] = useState(true)

  const dispatch = useDispatch()

  const articles = useSelector(store => store.articles.data)

  useEffect(() => {
    const action = updatedArticles()
    dispatch(action)
  }, [dispatch])

  const renderArticles = (articles, filter, recents) => {
    if (filter.length === 0) {
      if (recents) {
        return articles.map(article => (
          <Article key={article.id} article={article} />
        ))
      } else {
        const oldFirst = [...articles]
        return oldFirst
          .reverse()
          .map(article => <Article key={article.id} article={article} />)
      }
    } else {
      const artFilter = articles.filter(
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
    <section className='container-articles'>
      <Categories />
      <Search
        value={filterSearch}
        handleOnChange={setFilterSearch}
        onClickFilter={setFilterRecents}
        filterRecents={filterRecents}
      />
      {renderArticles(articles, filterSearch, filterRecents)}
    </section>
  )
}
