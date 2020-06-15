import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

//Notificações
import { toast } from 'react-toastify'

import './Profile.css'

import {
  getUser,
  updatedUser,
  profileMode,
} from '../../../../store/actions/actionsUser'
import { showEditAndShare } from '../../../../store/actions/actionsButtonFloat'

import Input from '../Article/Input/Input'
import Textarea from '../Article/Textarea/Textarea'
import Button from '../Article/Button/Button'

export default props => {
  const dispatch = useDispatch()

  const { user } = props

  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')

  useEffect(() => {
    if (user) {
      const userData = { ...user }

      setName(`${userData.name}`)
      if (userData.imageURL !== null) setImageURL(`${userData.imageURL}`)
      if (userData.title !== null) setTitle(`${userData.title}`)
      if (userData.about !== null) setAbout(`${userData.about}`)

      return
    }

    return
  }, [user])

  const updatedProfile = async (name, imageURL, title, about) => {
    const userUpdated = {
      name,
      imageURL,
      title,
      about,
    }

    const actionUser = updatedUser(userUpdated)
    const resultPromise = dispatch(actionUser)

    const error = await resultPromise.then(resp => false).catch(err => true)

    if (!error) {
      const actionGetUser = getUser()
      dispatch(actionGetUser)

      const actionProfileMode = profileMode(false)
      dispatch(actionProfileMode)

      const actionShowEditAndShare = showEditAndShare(false)
      dispatch(actionShowEditAndShare)

      return toast.success('Perfil atualizado com sucesso!')
    }

    return
  }

  const cancelEditProfile = async () => {
    const actionProfileMode = profileMode(false)
    dispatch(actionProfileMode)

    const actionShowEditAndShare = showEditAndShare(false)
    dispatch(actionShowEditAndShare)

    clearProfile()
  }

  const clearProfile = () => {
    setName('')
    setImageURL('')
    setTitle('')
    setAbout('')
  }

  return (
    <div className='container-edit-and-share-profile'>
      <Input
        id='name'
        label='Seu Nome'
        handleChange={setName}
        placeholder='Informe seu nome'
        type='text'
        value={name}
      />
      <Input
        id='imageURL'
        label='URL da imagem do perfil'
        handleChange={setImageURL}
        placeholder='Informe a url da imagem desejada'
        type='text'
        value={imageURL}
      />
      <Input
        id='title'
        label='Título'
        handleChange={setTitle}
        placeholder='Informe seu título'
        type='text'
        value={title}
      />
      <Textarea
        id='about'
        label='Sobre você:'
        handleChange={setAbout}
        placeholder='Compartilhe um pouco sobre você :)'
        type='text'
        value={about}
      />
      <div className='group-button-edit-and-share-profile'>
        <Button label='Cancelar' handleClick={cancelEditProfile} />
        <Button
          label='Salvar'
          handleClick={() => updatedProfile(name, imageURL, title, about)}
        />
      </div>
    </div>
  )
}
