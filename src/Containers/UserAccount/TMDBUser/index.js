import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import Details from './details'

class AccountInfo extends Component {
  componentWillReceiveProps(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      alert('changed!')
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Match {this.props.match.params.type}</h1>
      </div>
    )
  }
}

const accountRoutes = [{ path: '/:type', component: AccountInfo }]

const accountLinks = [
  { to: '/watchList', exact: 'true', title: 'Watch List' },
  { to: '/rated_movies', exact: 'true', title: 'Rated Movies' },
  { to: '/rated_tv_shows', exact: 'true', title: 'Rated TV Shows' },
  { to: '/details', exact: 'true', title: 'Get account Details' },
]

class TMDBAccount extends Component {
  state = {
    data: {},
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Details />
        {/* <div>
          {accountLinks.map((item) => (
            <Link key={item.title} to={`${match.path + item.to}`}>
              {item.title}
              <br />
            </Link>
          ))}
        </div>
        <div>
          {accountRoutes.map((item) => (
            <Route
              key={item.path}
              path={`${match.path + item.path}`}
              component={item.component}
            />
          ))}
        </div> */}
      </div>
    )
  }
}

export default withRouter(TMDBAccount)
