import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { FiHome, FiUser } from 'react-icons/fi'

import './Menu.css'

import { validateToken } from '../../../store/actions/actionsAuth'

export default props => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [itemSelect, setItemSelect] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    const action = validateToken()
    history.push('/')
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
          className={`menu-item ${itemSelect ? 'select-item' : ''}`}
          onClick={() => handleSelectItem(true)}
          to='/'
        >
          <FiHome className='icon-menu' size={40} />
          Início
        </Link>
        <Link
          className={`menu-item ${!itemSelect ? 'select-item' : ''}`}
          onClick={() => handleSelectItem(false)}
          to='/profile'
        >
          <FiUser className='icon-menu' size={40} />
          Perfil
        </Link>
        <button onClick={handleLogout} className='button-logout'>
          Sair
        </button>
      </div>
    </section>
  )
}
