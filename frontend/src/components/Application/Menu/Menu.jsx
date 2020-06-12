import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiHome, FiUser } from 'react-icons/fi'

import './Menu.css'

import { validateToken } from '../../../store/actions/actionsAuth'

import MenuItem from './MenuItem/MenuItem'

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
        <h1 className='logo-terEnsino-menu-mobile'>#tE</h1>
        <MenuItem
          url='/'
          handleClick={() => handleSelectItem(true)}
          classItem='menu-item'
          label='Início'
          Icon={FiHome}
          itemSelect={itemSelect}
        />
        <MenuItem
          url='/'
          handleClick={() => handleSelectItem(true)}
          classItem='menu-item-mobile'
          Icon={FiHome}
          itemSelect={itemSelect}
        />
        <MenuItem
          url='/profile'
          handleClick={() => handleSelectItem(false)}
          classItem='menu-item'
          label='Perfil'
          Icon={FiUser}
          itemSelect={!itemSelect}
        />
        <MenuItem
          url='/profile'
          handleClick={() => handleSelectItem(false)}
          classItem='menu-item-mobile'
          Icon={FiUser}
          itemSelect={!itemSelect}
        />
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
