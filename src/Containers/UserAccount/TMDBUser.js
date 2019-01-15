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
  { path: '/watchList', component: WatchList },
  { path: '/rated_movies', component: RatedMovies },
  { path: '/rated_tv_shows', component: RatedTVShows },
]

const accountLinks = [
  { to: '/watchList', exact: 'true', title: 'Watch List' },
  { to: '/rated_movies', exact: 'true', title: 'Rated Movies' },
  { to: '/rated_tv_shows', exact: 'true', title: 'Rated TV Shows' },
]

const mapAccountLinks = () =>
  accountLinks.map(item => (
    <Link key={item.title} to={item.to} exact={item.exact}>
      {item.title}
    </Link>
  ))
const mapAccountRoutes = () =>
  accountRoutes.map(item => (
    <Route key={item.path} path={item.path} component={item.component} />
  ))

class TMDBAccount extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {}

  render() {
    console.log(this.props)
    return (
      <div style={{ padding: '2rem 0' }}>
        <h1>Hello TMDB User</h1>
        <div>{mapAccountLinks()}</div>
        {mapAccountRoutes()}
      </div>
    )
  }
}

export default TMDBAccount
