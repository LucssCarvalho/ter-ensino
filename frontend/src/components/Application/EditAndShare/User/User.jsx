import React from 'react'

import './User.css'

export default props => {
  const { user } = props
  return (
    <div className='container-user'>
      <div
        className='image-user'
        style={
          user.imageURL !== null
            ? {
                backgroundImage: `url(${user.imageURL})`,
              }
            : {}
        }
      ></div>
      <div className='group-user-information'>
        <p className='name-user'>{user.name}</p>
        <p className='title-user'>
          {user.title ? user.title : 'Aprendiz em tempo integral'}
        </p>
      </div>
    </div>
  )
}
