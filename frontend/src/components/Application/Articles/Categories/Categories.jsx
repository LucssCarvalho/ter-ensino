import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import './Categories.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const [dropActive, setDropActive] = useState(false)
  const { handleOnClick, categories, categoryActive } = props

  const renderCategories = (categories, onClick, active) => {
    return categories.map((category, index) => (
      <button
        onClick={e => onClick(e.target.value)}
        className={`category-item ${
          active === category ? 'active-category' : ''
        } ${
          darkMode
            ? 'background-theme-dark-global border-color-theme-dark-global'
            : ''
        }`}
        value={category}
        key={index}
      >
        {category}
      </button>
    ))
  }

  return (
    <div
      className={'container-categories'}
      style={
        dropActive
          ? {
              height: `${
                ((categories.length * 50) / 4) % 2 === 0
                  ? (categories.length * 50) / 4
                  : (categories.length * 50) / 4 + 50
              }px`,
            }
          : {}
      }
    >
      {!dropActive && (
        <FaChevronDown
          className='icon-drop'
          size={21}
          onClick={() => setDropActive(!dropActive)}
        />
      )}
      {dropActive && (
        <FaChevronUp
          className='icon-drop'
          size={21}
          onClick={() => setDropActive(!dropActive)}
        />
      )}
      <div className='group-itens-categories'>
        {renderCategories(categories, handleOnClick, categoryActive)}
      </div>
    </div>
  )
}
