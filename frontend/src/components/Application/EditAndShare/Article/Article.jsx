import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import './Article.css'

import Input from './Input/Input'
import Textarea from './Textarea/Textarea'
import Button from './Button/Button'
import Select from './Select/Select'

import api from '../../../../services/api'

import {
  updatedArticles,
  setModeEditArticle,
} from '../../../../store/actions/actionsArticles'

export default props => {
  const dispatch = useDispatch()

  const { articles, articleId, modeEditArticle } = props

  const [titleArticle, setTitleArticle] = useState('')
  const [imageUrlArticle, setImageUrlArticle] = useState('')
  const [contentArticle, setContentArticle] = useState('')
  const [categoryArticle, setCategoryArticle] = useState('')

  useEffect(() => {
    if (modeEditArticle) {
      if (articles.data.length !== 0) {
        const copyArticles = [...articles.data]
        const articleSelect = copyArticles.filter(
          article => article.id === articleId
        )
        setTitleArticle(articleSelect[0].title)
        setImageUrlArticle(articleSelect[0].imageURL)
        setContentArticle(articleSelect[0].content)
        setCategoryArticle(articleSelect[0].category)

        return
      }
    } else {
      return
    }
  }, [articles.data, articleId, modeEditArticle])

  const submitArticle = async (
    method,
    title,
    imageURL,
    content,
    category,
    id = false
  ) => {
    const article = {
      title,
      imageURL,
      content,
      category,
    }
    const response = await api[method](`/articles/${id ? id : ''}`, {
      ...article,
    }).catch(err => err.response.data)

    if (response.error) return toast.error(response.error)

    const actionUpdated = updatedArticles()
    dispatch(actionUpdated)

    const actionModeEdit = setModeEditArticle(false)
    dispatch(actionModeEdit)

    clearArticle()

    return toast.success(response.data.message)
  }

  const cancelEditArticle = () => {
    const actionModeEdit = setModeEditArticle(false)
    dispatch(actionModeEdit)

    clearArticle()
  }

  const clearArticle = () => {
    setTitleArticle('')
    setImageUrlArticle('')
    setContentArticle('')
    setCategoryArticle('')
  }

  return (
    <div className='container-edit-and-share-article'>
      <Input
        id='title'
        label='Título do ensinamento'
        handleChange={setTitleArticle}
        placeholder='Dê um título ao seu ensinamento'
        type='text'
        value={titleArticle}
      />
      <Input
        id='imageURL'
        label='URL da imagem de abertura'
        handleChange={setImageUrlArticle}
        placeholder='Informe a url da imagem desejada'
        type='text'
        value={imageUrlArticle}
      />
      <Textarea
        id='content'
        label='Conteúdo'
        handleChange={setContentArticle}
        placeholder='Compartilhe seus ensinamentos :)'
        type='text'
        value={contentArticle}
      />
      <div className='group-bottom-edit-and-share-article'>
        <Select
          value={categoryArticle}
          handleChange={setCategoryArticle}
          categories={articles.categories}
        />
        <div className='group-button-edit-and-share-article'>
          {!modeEditArticle && (
            <Button
              label='Compartilhar'
              handleClick={() =>
                submitArticle(
                  'post',
                  titleArticle,
                  imageUrlArticle,
                  contentArticle,
                  categoryArticle
                )
              }
            />
          )}
          {modeEditArticle && (
            <Button label='Cancelar' handleClick={cancelEditArticle} />
          )}
          {modeEditArticle && (
            <Button
              label='Salvar'
              handleClick={() =>
                submitArticle(
                  'put',
                  titleArticle,
                  imageUrlArticle,
                  contentArticle,
                  categoryArticle,
                  articleId
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
