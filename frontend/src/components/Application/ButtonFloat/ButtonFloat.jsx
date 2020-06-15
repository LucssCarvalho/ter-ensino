import React from 'react'
import { useDispatch } from 'react-redux'
import { FaPencilAlt } from 'react-icons/fa'

import './ButtonFloat.css'

import { showEditAndShare } from '../../../store/actions/actionsButtonFloat'

export default props => {
  const dispatch = useDispatch()

  const handleShowEditAndShare = value => {
    const action = showEditAndShare(value)
    dispatch(action)
  }
  return (
    <div className='container_button_float'>
      <div
        onClick={() => handleShowEditAndShare(true)}
        className='button-float'
      >
        <FaPencilAlt />
      </div>
    </div>
  )
}
