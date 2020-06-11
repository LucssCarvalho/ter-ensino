import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiHome, FiUser } from 'react-icons/fi'

import './Menu.css'

import { validateToken } from '../../../store/actions/actionsAuth'

export default props => {
  const dispatch = useDispatch()

  const darkMode = useSelector(store => store.themeMode.darkMode)

  const [itemSelect, setItemSelect] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    const action = validateToken()
    dispatch(action)
  }

  const handleSelectItem = value => {
    return setItemSelect(value)
  }

  return (
    <section className='container-menu'>
      <div className='menu-app'>
        <h1 className='logo-terEnsino-menu'>#terEnsino</h1>
        <Link
          className={`menu-item ${itemSelect ? 'select-item' : ''} ${
            darkMode ? 'font-color-theme-dark-global' : ''
          }`}
          onClick={() => handleSelectItem(true)}
          to='/'
        >
          <FiHome className='icon-menu' size={40} />
          Início
        </Link>
        <Link
          className={`menu-item ${!itemSelect ? 'select-item' : ''} ${
            darkMode ? 'font-color-theme-dark-global' : ''
          }`}
          onClick={() => handleSelectItem(false)}
          to='/profile'
        >
          <FiUser className='icon-menu' size={40} />
          Perfil
        </Link>
        <button onClick={handleLogout} className='button-logout'>
          Sair
        </button>

        <div className='menu-development-credits'>
          <p
            className={`thank-you ${
              darkMode ? 'font-color-theme-dark-global' : ''
            }`}
          >
            Obrigado por participar!
          </p>
          <p className='development'>
            Desenvolvido com{' '}
            <span role='img' aria-label='sheep'>
              💚
            </span>{' '}
            por terEnsino © 2020.
          </p>
        </div>
      </div>
    </section>
  )
}
