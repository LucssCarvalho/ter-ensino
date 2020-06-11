import React from 'react'
import { useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'

import './Search.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const {
    value,
    placeholder,
    filterRecents,
    handleOnChange,
    onClickFilter,
  } = props
  return (
    <div className='container-search'>
      <span
        className={`search-articles ${
          darkMode ? 'bar-search-theme-dark-global' : ''
        }`}
      >
        <FaSearch className='icon-search' size={18} />
        <input
          className={`bar-search ${
            darkMode ? 'font-color-input-and-textarea-theme-dark-global' : ''
          }`}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={e => handleOnChange(e.target.value)}
        />
      </span>
      {!filterRecents && (
        <p
          className='filterRecents'
          onClick={() => onClickFilter(!filterRecents)}
        >
          Recentes Primeiro
        </p>
      )}
      {filterRecents && (
        <p
          className='filterRecents'
          onClick={() => onClickFilter(!filterRecents)}
        >
          Antigos Primeiro
        </p>
      )}
    </div>
  )
}
