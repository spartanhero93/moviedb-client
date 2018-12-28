import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'

/** Pages */
import TVList from './TVList'

const Routes = [
  {
    path: '/tv/:list',
    exact: true,
    component: TVList,
  },
]

const Links = [
  {
    to: '/tv/airing_today',
    title: 'Airing Today',
  },
  {
    to: '/tv/popular',
    title: 'Popular',
  },
  {
    to: '/tv/top_rated',
    title: 'Top Rated',
  },
  {
    to: '/tv/on_the_air',
    title: 'Currently on Air',
  },
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
