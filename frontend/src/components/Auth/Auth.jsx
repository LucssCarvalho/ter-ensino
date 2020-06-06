import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

//Notificações
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Auth.css'

import api from '../../services/api'

import { signin } from '../../store/actions/actionsAuth'

import Input from './Input/Input'
import Button from './Button/Button'

export default props => {
  const dispatch = useDispatch()

  const [showSignin, setShowSignin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignin = () => {
    const action = signin({ email, password })
    dispatch(action)
  }

  const handleSignup = async () => {
    let onError = false

    const response = await api
      .post('/signup', {
        name,
        email,
        password,
        confirmPassword,
      })
      .catch(err => {
        onError = err.response.data.error
        return err
      })

    if (onError) {
      toast.error(onError)
      return
    }

    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    toast.success(response.data.message)
  }

  return (
    <div className='container-auth'>
      <div className='background-auth'></div>
      <section
        className={`container-signin-and-signup ${
          !showSignin ? 'signup-height' : ''
        }`}
      >
        <h1 className='logo-terEnsino'>#terEnsino</h1>
        <div className='signin-and-signup'>
          {!showSignin && (
            <Input
              label='Nome'
              id='name'
              type='text'
              value={name}
              handleChange={setName}
            />
          )}
          <Input
            label='E-mail'
            id='email'
            type='email'
            value={email}
            handleChange={setEmail}
          />
          <Input
            label='Senha'
            id='password'
            type='password'
            value={password}
            handleChange={setPassword}
          />
          {!showSignin && (
            <Input
              label='Confirmar Senha'
              id='confirmPassword'
              type='password'
              value={confirmPassword}
              handleChange={setConfirmPassword}
            />
          )}
          {showSignin && (
            <Button
              label='Não é registrado'
              labelButton='Entrar'
              onClickButton={handleSignin}
              onClickLabel={() => setShowSignin(false)}
            />
          )}
          {!showSignin && (
            <Button
              label='Já é registrado'
              labelButton='Cadastrar'
              onClickButton={handleSignup}
              onClickLabel={() => setShowSignin(true)}
            />
          )}
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}
