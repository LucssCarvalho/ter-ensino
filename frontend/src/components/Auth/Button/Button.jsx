import React from 'react'

import './Button.css'

export default props => {
  const { label, labelButton, onClickButton, onClickLabel } = props

  return (
    <div className='group-button-auth'>
      <label onClick={onClickLabel}>{`${label}? Clique aqui`}</label>
      <button className='button-auth' onClick={onClickButton}>
        {labelButton}
      </button>
    </div>
  )
}
