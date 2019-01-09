import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'

import MovieList from './MovieList'
import styled from 'styled-components'

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

const NavItem = styled(Link)`
  color: blue;

  &.${props => props.activeClassName} {
    color: red;
  }
`

NavItem.defaultProps = {
  activeClassName: 'active',
}

export const MovieRoutes = () =>
  Routes.map(item => (
    <Route key={item.path} path={item.path} component={item.component} />
  ))

export const mapMovieLinksToNavLinks = styles =>
  Links.map(item => {
    const MyLink = props => <NavItem to={item.to} {...props} />
    return (
      <Button component={MyLink} key={item.title} className={styles.button}>
        {item.title}
      </Button>
    )
  })
