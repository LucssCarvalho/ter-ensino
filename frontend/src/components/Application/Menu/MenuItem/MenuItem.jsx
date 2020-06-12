import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './MenuItem.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const { url, handleClick, classItem, label, Icon, itemSelect } = props

  return (
    <Link
      className={`${classItem} ${itemSelect ? 'select-item' : ''} ${
        darkMode ? 'font-color-theme-dark-global' : ''
      }`}
      onClick={handleClick}
      to={url}
    >
      <Icon className='icon-menu' size={40} />
      {label ? label : ''}
    </Link>
  )
}
