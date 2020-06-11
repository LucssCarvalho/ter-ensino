import React from 'react'
import { useSelector } from 'react-redux'

import './Textarea.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const { id, label, handleChange, placeholder, type, value } = props

  return (
    <div className='group-textarea-edit-share-article'>
      <label
        className={`${darkMode ? 'font-color-theme-dark-global' : ''}`}
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
        className={`${
          darkMode
            ? 'bar-search-theme-dark-global font-color-input-and-textarea-theme-dark-global'
            : ''
        }`}
      />
    </div>
  )
}
