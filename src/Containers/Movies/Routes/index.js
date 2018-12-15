import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'

import NowPlaying from './NowPlaying'
import TopRated from './TopRated'
import Popular from './Popular'
import Upcoming from './Upcoming'

const Routes = [
  {
    path: '/top_rated',
    exact: true,
    component: TopRated
  },
  {
    path: '/popular',
    exact: true,
    component: Popular
  },
  {
    path: '/upcoming',
    exact: true,
    component: Upcoming
  },
  {
    path: '/now_playing',
    exact: true,
    component: NowPlaying
  }
]

const Links = [
  {
    to: '/top_rated',
    title: 'Top Rated'
  },
  {
    to: '/popular',
    title: 'Popular'
  },
  {
    to: '/upcoming',
    title: 'Upcoming'
  },
  {
    to: '/now_playing',
    title: 'Now Playing'
  }
]
export const mapMovieLinksToNavLinks = (styles) =>
  Links.map((item) => (
    <NavLink
      key={item.title}
      to={item.to}
      style={{ textDecoration: 'none' }}
    >
      <Button className={styles.button}>
        {item.title}
      </Button>
    </NavLink>
  ))

export const mapRoutesToRouter = () =>
  Routes.map((item) => (
    <Route
      key={item.path}
      exact={item.exact}
      path={item.path}
      component={item.component}
    />
  ))
