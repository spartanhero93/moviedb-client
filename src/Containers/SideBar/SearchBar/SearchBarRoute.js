import React from 'react'
import { Route } from 'react-router-dom'
import SearchBarContent from './SearchBarContent'

export const SearchBarRoute = () => (
  <Route key={'search'} exact path={'/search'} component={SearchBarContent} />
)
