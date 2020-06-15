import React from 'react'
import { useSelector } from 'react-redux'

//Notificações
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Application.css'

import Routes from '../../config/routes'
import ThemeMode from './ThemeMode/ThemeMode'
import ButtonFloat from './ButtonFloat/ButtonFloat'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)
  return (
    <div
      className={`application-main darkMode ${
        darkMode ? 'background-theme-dark-global' : ''
      }`}
    >
      <ThemeMode />
      <ButtonFloat />
      <Routes />
      <ToastContainer />
    </div>
  )
}
