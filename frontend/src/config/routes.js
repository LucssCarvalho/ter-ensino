import React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'

import Menu from '../components/Application/Menu/Menu'
import MenuMobile from '../components/Application/MenuMobile/MenuMobile'
import EditAndShare from '../components/Application/EditAndShare/EditAndShare'
import Articles from '../components/Application/Articles/Articles'
import Profile from '../components/Application/Profile/Profile'

export default props => (
  <BrowserRouter>
    <Menu />
    <MenuMobile />
    <Switch>
      <Route exact path={'/'} component={Articles} />
      <Route path={'/Profile'} component={Profile} />
      <Redirect useRef='*' to='/' />
    </Switch>
    <EditAndShare />
  </BrowserRouter>
)
