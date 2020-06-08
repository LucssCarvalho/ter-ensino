import React from 'react'

import './Input.css'

export default props => {
  const { id, label, handleChange, placeholder, type, value } = props

  return (
    <div className='group-input-edit-share-article'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  )
}
