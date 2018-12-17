import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'

/** Pages */
import AiringToday from './AiringToday'
import CurrentlyOnAir from './CurrentlyOnAir'
import Popular from './Popular'
import TopRated from './TopRated'

const Routes = [
  {
    path: '/tv/airing_today',
    exact: true,
    component: AiringToday
  },
  {
    path: '/tv/popular',
    exact: true,
    component: Popular
  },
  {
    path: '/tv/top_rated',
    exact: true,
    component: TopRated
  },
  {
    path: '/tv/currently_on_air',
    exact: true,
    component: CurrentlyOnAir
  }
]

const Links = [
  {
    to: '/tv/airing_today',
    title: 'Airing Today'
  },
  {
    to: '/tv/popular',
    title: 'Popular'
  },
  {
    to: '/tv/top_rated',
    title: 'Top Rated'
  },
  {
    to: '/tv/currently_on_air',
    title: 'Currently on Air'
  }
]

export const mapTVLinksToNavLinks = (styles) =>
  Links.map((item) => (
    <NavLink key={item.title} to={item.to} style={{ textDecoration: 'none' }}>
      <Button className={styles.button}>{item.title}</Button>
    </NavLink>
  ))

export const mapTVRoutesToRouter = () =>
  Routes.map((item) => (
    <Route
      key={item.path}
      exact={item.exact}
      path={item.path}
      component={item.component}
    />
  ))
