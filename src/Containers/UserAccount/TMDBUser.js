import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

const WatchList = () => (
  <div>
    <h1>WatchList</h1>
  </div>
)
const RatedMovies = () => (
  <div>
    <h1>RatedMovies</h1>
  </div>
)
const RatedTVShows = () => (
  <div>
    <h1>RatedTVShows</h1>
  </div>
)

const accountRoutes = [
  { path: '/account/watchList', component: WatchList },
  { path: '/account/rated_movies', component: RatedMovies },
  { path: 'account/rated_tv_shows', component: RatedTVShows }
]

const accountLinks = [
  { to: '/account/watchList', exact: true, title: 'Watch List' },
  { to: '/account/rated_movies', exact: true, title: 'Rated Movies' },
  { to: 'account/rated_tv_shows', exact: true, title: 'Rated TV Shows' }
]

const mapAccountLinks = () =>
  accountLinks.map((item) => (
    <Link to={item.to} exact={item.exact}>
      {item.title}
    </Link>
  ))
const mapAccountRoutes = () =>
  accountRoutes.map((item) => (
    <Route path={item.path} component={item.component} />
  ))

class TMDBAccount extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Hello TMDB User</h1>
        <div>{mapAccountLinks()}</div>
        <Switch>{mapAccountRoutes()}</Switch>
      </div>
    )
  }
}

export default TMDBAccount
