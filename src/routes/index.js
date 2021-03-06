import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

import MovieList from './MovieList'
import TVList from './TVList'

const Routes = [
  {
    path: '/movies/:list',
    component: MovieList,
  },
  {
    path: '/tv/:list',
    exact: true,
    component: TVList,
  },
]

const TVLinks = [
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

const MovieLinks = [
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

const NavItem = styled(NavLink)`
  transition: all 0.5s ease-in-out;
  &.${props => props.activeClassName} {
    &::after {
      content: '>';
    }
  }
`

NavItem.defaultProps = {
  activeClassName: 'active',
}

export const mappedRoutes = () =>
  Routes.map(item => (
    <Route key={item.path} path={item.path} component={item.component} />
  ))

export const mapTVLinks = styles =>
  TVLinks.map(item => {
    const MyLink = props => <NavItem to={item.to} {...props} />
    return (
      <Button component={MyLink} key={item.title} className={styles.button}>
        {item.title}
      </Button>
    )
  })

export const mapMovieLinks = styles =>
  MovieLinks.map(item => {
    const MyLink = props => <NavItem to={item.to} {...props} />
    return (
      <Button component={MyLink} key={item.title} className={styles.button}>
        {item.title}
      </Button>
    )
  })
