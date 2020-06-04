import React from 'react'

import './Input.css'

export default props => {
  const { label, id, type, value } = props

  return (
    <div className='group-input-auth'>
      <label htmlFor={id}>{label}</label>
      <input value={value} id={id} className='input-auth' type={type} />
    </div>
  )
}
