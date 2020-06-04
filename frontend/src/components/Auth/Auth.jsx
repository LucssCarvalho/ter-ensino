import React, { useState } from 'react'

import './Auth.css'

import Input from './Input/Input'
import Button from './Button/Button'

export default props => {
  const [signin, setSignin] = useState(true)

  return (
    <div className='container-auth'>
      <div className='background-auth'></div>
      <section
        className={`container-signin-and-signup ${
          !signin ? 'signup-height' : ''
        }`}
      >
        <h1 className='logo-terEnsino'>#terEnsino</h1>
        <div className='signin-and-signup'>
          {!signin && (
            <Input
              label='Nome'
              id='name'
              type='text'
              value='Jonathan Raphael'
            />
          )}
          <Input
            label='E-mail'
            id='email'
            type='email'
            value='jonathan@gmail.com'
          />
          <Input label='Senha' id='password' type='password' value='1123' />
          {!signin && (
            <Input
              label='Confirmar Senha'
              id='confirmPassword'
              type='password'
              value='1123'
            />
          )}
          {signin && (
            <Button
              label='Não é registrado'
              labelButton='Entrar'
              onClickButton={() => console.log('teste')}
              onClickLabel={() => setSignin(false)}
            />
          )}
          {!signin && (
            <Button
              label='Já é registrado'
              labelButton='Cadastrar'
              onClickButton={() => console.log('teste')}
              onClickLabel={() => setSignin(true)}
            />
          )}
        </div>
      </section>
    </div>
  )
}
