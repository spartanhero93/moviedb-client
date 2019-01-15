import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'

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

class TMDBAccount extends Component {
  state = {
    data: {},
  }

  render() {
    console.log(this.props)
    const { match } = this.props
    return (
      <div style={{ padding: '2rem' }}>
        <h1>Hello TMDB User</h1>
        <div>
          {accountLinks.map(item => (
            <Link
              key={item.title}
              to={`${match.path + item.to}`}
              exact={item.exact}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {accountRoutes.map(item => (
          <Route
            key={item.path}
            path={`${match.path + item.path}`}
            component={item.component}
          />
        ))}
      </div>
    )
  }
}

export default withRouter(TMDBAccount)
