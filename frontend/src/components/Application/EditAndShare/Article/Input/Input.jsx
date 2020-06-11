import React from 'react'
import { useSelector } from 'react-redux'

import './Input.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const { id, label, handleChange, placeholder, type, value } = props

  return (
    <div className='group-input-edit-share-article'>
      <label
        className={`${darkMode ? 'font-color-theme-dark-global' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
        className={`${
          darkMode ? 'font-color-input-and-textarea-theme-dark-global' : ''
        }`}
      />
    </div>
  )
}
