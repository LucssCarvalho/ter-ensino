import React from 'react'

import './Button.css'

export default props => {
  const { label, handleClick } = props

  return (
    <button
      className='button-edit-and-share-article'
      onClick={() => handleClick()}
    >
      {label}
    </button>
  )
}
