import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

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

export const mapTVLinksToNavLinks = styles =>
  Links.map(item => {
    const MyLink = props => <NavItem to={item.to} {...props} />
    return (
      <Button component={MyLink} key={item.title} className={styles.button}>
        {item.title}
      </Button>
    )
  })

export const mapTVRoutesToRouter = () =>
  Routes.map(item => (
    <Route
      key={item.path}
      exact={item.exact}
      path={item.path}
      component={item.component}
    />
  ))
