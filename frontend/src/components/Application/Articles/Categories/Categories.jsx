import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import './Categories.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const [dropActive, setDropActive] = useState(false)
  const [categoryItem3, setCategoryItem3] = useState(false)
  const [categoryItem2, setCategoryItem2] = useState(false)
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

  useEffect(() => {
    window.onresize = () => handleSizeWidth()
  })

  const handleSizeWidth = () => {
    if (window.innerWidth < 599 && window.innerWidth > 400) {
      setCategoryItem3(true)
    } else {
      setCategoryItem3(false)
    }
    if (window.innerWidth < 400) {
      setCategoryItem2(true)
    } else {
      setCategoryItem2(false)
    }
  }

  const handleMenuDrop = () => {
    handleSizeWidth()
    setDropActive(!dropActive)
  }

  return (
    <div
      className={'container-categories'}
      style={
        dropActive && !categoryItem3 && !categoryItem2
          ? {
              height: `${
                ((categories.length * 50) / 4) % 2 === 0
                  ? (categories.length * 50) / 4
                  : (categories.length * 50) / 4 + 50
              }px`,
            }
          : dropActive && categoryItem3 && !categoryItem2
          ? {
              height: `${
                ((categories.length * 50) / 3) % 2 === 0
                  ? (categories.length * 50) / 3
                  : (categories.length * 50) / 3 + 20
              }px`,
            }
          : dropActive && !categoryItem3 && categoryItem2
          ? {
              height: `${
                ((categories.length * 50) / 2) % 2 === 0
                  ? (categories.length * 50) / 2
                  : (categories.length * 50) / 2 + 50
              }px`,
            }
          : {}
      }
    >
      {!dropActive && (
        <FaChevronDown
          className='icon-drop'
          size={21}
          onClick={handleMenuDrop}
        />
      )}
      {dropActive && (
        <FaChevronUp className='icon-drop' size={21} onClick={handleMenuDrop} />
      )}
      <div className='group-itens-categories'>
        {renderCategories(categories, handleOnClick, categoryActive)}
      </div>
    </div>
  )
}
