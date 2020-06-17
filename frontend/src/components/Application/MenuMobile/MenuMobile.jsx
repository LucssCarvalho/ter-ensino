import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiHome, FiUser } from 'react-icons/fi'

import './MenuMobile.css'

import { validateToken } from '../../../store/actions/actionsAuth'

import MenuItemMobile from './MenuItemMobile/MenuItemMobile'

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
    <section
      className={`container-menu-mobile ${
        darkMode ? 'background-edit-and-share-theme-dark-global' : ''
      }`}
    >
      <div className='menu-app-mobile'>
        <h1 className='logo-terEnsino-menu-mobile-2'>#tE</h1>
        <MenuItemMobile
          url='/'
          handleClick={() => handleSelectItem(true)}
          classItem='menu-item-mobile-2'
          Icon={FiHome}
          itemSelect={itemSelect}
        />
        <MenuItemMobile
          url='/profile'
          handleClick={() => handleSelectItem(false)}
          classItem='menu-item-mobile-2'
          Icon={FiUser}
          itemSelect={!itemSelect}
        />
        <button onClick={handleLogout} className='button-logout-mobile'>
          Sair
        </button>
      </div>
    </section>
  )
}
