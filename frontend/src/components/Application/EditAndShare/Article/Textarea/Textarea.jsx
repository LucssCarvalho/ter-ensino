import React from 'react'

import './Textarea.css'

export default props => {
  const { id, label, handleChange, placeholder, type, value } = props

  return (
    <div className='group-textarea-edit-share-article'>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  )
}
