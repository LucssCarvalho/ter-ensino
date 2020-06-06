import React from 'react'

//Notificações
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './Application.css'

import Routes from '../../config/routes'

export default props => {
  return (
    <div className='application-main'>
      <Routes />
      <ToastContainer />
    </div>
  )
}
