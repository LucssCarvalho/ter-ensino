import React from 'react'

import './InformationsUser.css'

export default props => {
  const { user, articles, onClickEditProfile, filterArticlesUser } = props
  return (
    <div className='profile-informations'>
      <div className='background-image-profile'></div>
      <div
        className='image-user-profile'
        style={
          user.data.imageURL !== null
            ? { backgroundImage: `url(${user.data.imageURL})` }
            : {}
        }
      ></div>

      <button
        onClick={onClickEditProfile}
        className={`button-edit-profile-user ${
          user.profileMode ? 'button-edit-profile-hidden' : ''
        }`}
      >
        Editar perfil
      </button>

      <p className='profile-user-name'>{user.data.name}</p>
      <p className='profile-user-title'>
        {user.data.title !== null
          ? user.data.title
          : 'Aprendiz em tempo integral'}
      </p>
      <p className='profile-user-about'>
        {user.data.about !== null
          ? user.data.about
          : 'Compartilhe um pouco sobre você :)'}
      </p>
      <label className='label-about-user'>{`Sobre ${user.data.name}`}</label>
      <div className='count-articles-profile'>
        <p>
          <span>{filterArticlesUser(articles.data, user.data, true)}</span>{' '}
          Ensinamentos compartilhados
        </p>
      </div>
    </div>
  )
}
