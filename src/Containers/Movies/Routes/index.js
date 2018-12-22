import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'

import MovieList from './MovieList'

const Routes = [
  {
    path: '/movies/:list',
    component: MovieList,
  },
]

const Links = [
  {
    to: '/movies/top_rated',
    title: 'Top Rated',
  },
  {
    to: '/movies/popular',
    title: 'Popular',
  },
  {
    to: '/movies/upcoming',
    title: 'Upcoming',
  },
  {
    to: '/movies/now_playing',
    title: 'Now Playing',
  },
]

export const MovieRoutes = () =>
  Routes.map((item) => (
    <Route key={item.path} path={item.path} component={item.component} />
  ))

export const mapMovieLinksToNavLinks = (styles, handleDrawerToggle) =>
  Links.map((item) => (
    <NavLink key={item.title} to={item.to} style={{ textDecoration: 'none' }}>
      <Button className={styles.button}>{item.title}</Button>
    </NavLink>
  ))
