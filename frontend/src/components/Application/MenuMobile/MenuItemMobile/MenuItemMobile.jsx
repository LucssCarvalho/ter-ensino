import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './MenuItemMobile.css'

export default props => {
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const { url, handleClick, classItem, label, Icon, itemSelect } = props

  return (
    <Link
      className={`${classItem} ${itemSelect ? 'select-item-mobile' : ''} ${
        darkMode ? 'font-color-theme-dark-global' : ''
      }`}
      onClick={handleClick}
      to={url}
    >
      <Icon className='icon-menu-mobile' size={30} />
      {label ? label : ''}
    </Link>
  )
}
