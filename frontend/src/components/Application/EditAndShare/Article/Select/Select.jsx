import React from 'react'

import './Select.css'

export default props => {
  const { value, handleChange, categories } = props

  const renderOptionsSelect = categories => {
    return categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))
  }

  return (
    <select
      className='select-category-article'
      value={value}
      onChange={e => handleChange(e.target.value)}
      name='category-article'
      id='category'
    >
      <option value=''>Selecionar categoria</option>
      {renderOptionsSelect(categories)}
    </select>
  )
}
