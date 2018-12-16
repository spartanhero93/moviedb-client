import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

import NowPlaying from './NowPlaying'
import TopRated from './TopRated'
import Popular from './Popular'
import Upcoming from './Upcoming'

const Routes = [
  {
    path: '/movies/top_rated',
    exact: true,
    component: TopRated
  },
  {
    path: '/movies/popular',
    exact: true,
    component: Popular
  },
  {
    path: '/movies/upcoming',
    exact: true,
    component: Upcoming
  },
  {
    path: '/movies/now_playing',
    exact: true,
    component: NowPlaying
  }
]

const Links = [
  {
    to: '/movies/top_rated',
    title: 'Top Rated'
  },
  {
    to: '/movies/popular',
    title: 'Popular'
  },
  {
    to: '/movies/upcoming',
    title: 'Upcoming'
  },
  {
    to: '/movies/now_playing',
    title: 'Now Playing'
  }
]

export const mapMovieRoutesToRouter = () =>
  Routes.map((item) => (
    <Route
      key={item.path}
      exact={item.exact}
      path={item.path}
      component={item.component}
    />
  ))

export const mapMovieLinksToNavLinks = (styles) =>
  Links.map((item) => (
    <NavLink key={item.title} to={item.to} style={{ textDecoration: 'none' }}>
      <Button className={styles.button}>{item.title}</Button>
    </NavLink>
  ))
