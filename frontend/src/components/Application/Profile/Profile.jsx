import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Profile.css'

export default props => {
  const user = useSelector(store => store.user)
  const articles = useSelector(store => store.articles)

  return (
    <section className='container-profile'>
      <h1 className='header-profile-title'>{`Informações sobre ${user.data.name}`}</h1>
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
        <button className='button-edit-profile-user'>Editar perfil</button>
        <p>{user.data.name}</p>
        <p>
          {user.data.title !== null
            ? user.data.title
            : 'Aprendiz em tempo integral'}
        </p>
        <p>
          {user.data.about !== null
            ? user.data.about
            : 'Compartilhe um pouco sobre você :)'}
        </p>
        <label>{`Sobre ${user.data.name}`}</label>
        <div className='count-articles-profile'>
          {/* <p>
            <span>
              {articles.data.reduce((total, article) => {
                console.log(article)
                if (article.author.id === user.data.id) return total + 1
                return total
              }, 0)}
            </span>{' '}
            Ensinamentos compartilhados
          </p> */}
        </div>
      </div>
    </section>
  )
}
