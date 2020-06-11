import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './ThemeMode.css'

import { alterModeDark } from '../../../store/actions/actionsThemeMode'

export default props => {
  const dispatch = useDispatch()
  const darkMode = useSelector(store => store.themeMode.darkMode)

  const modeTheme = value => {
    const action = alterModeDark(value)
    dispatch(action)
  }
  return (
    <div className='switch__container'>
      <input
        onChange={e => modeTheme(e.target.checked === true)}
        id='switch-flat'
        className='switch switch--flat'
        type='checkbox'
      />
      <label htmlFor='switch-flat'></label>
      {!darkMode && (
        <span className='emoji' role='img' aria-label='sheep'>
          🌞
        </span>
      )}
      {darkMode && (
        <span className='emoji' role='img' aria-label='sheep'>
          🌚
        </span>
      )}
    </div>
  )
}
