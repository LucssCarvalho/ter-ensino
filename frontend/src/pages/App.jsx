import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Auth from '../components/Auth/Auth'
import Application from '../components/Application/Application'

import { validateToken } from '../store/actions/actionsAuth'

export default props => {
  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    const action = validateToken(auth.token)
    dispatch(action)
  }, [auth.token, dispatch])

  return (
    <>
      {!auth.valid && <Auth />}
      {auth.valid && <Application />}
    </>
  )
}
