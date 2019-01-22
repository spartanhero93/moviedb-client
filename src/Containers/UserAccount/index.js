import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import {
  requestToken,
  createSessionWithToken,
  removeTMDBSession
} from '../../redux/actions'
import TMDBAccount from './TMDBUser'

class UserAccount extends Component {
  state = {
    userName: 'Guest',
    data: {},
    loggedIn: false
  }

  async componentDidMount() {
    if (window.localStorage['token']) {
      const response = await this.props.createSessionWithToken(
        window.localStorage['token']
      )
      if (response) {
        window.localStorage.removeItem('token')
        this.setState({ loggedIn: true, userName: 'TMDB user' })
      }
    }
    if (window.localStorage['session']) {
      this.setState({ loggedIn: true, userName: 'TMDB user' })
    }
    // window.localStorage['session']
    //   ? this.setState({ loggedIn: true, userName: 'TMDB User' })
    //   : window.localStorage['guest session']
    //   ? this.setState({ loggedIn: true, userName: 'Guest' })
    //   : this.setState({ loggedIn: false })

    /** Used when the user gets redirected from TMDB auth */
    this.props.history.push('/user/account')
  }

  handleGetTokenThenVerify = async () => {
    try {
      const token = await this.props.requestToken()
      window.localStorage.setItem('token', token)
      document.location.assign(
        `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/user/account`
      )
    } catch (error) {
      console.error(error)
    }
  }

  removeGuestSessionID = async () => {
    try {
      const { success } = this.props.removeSession()
      success ? window.localStorage.removeItem('session') : alert('Cant logout')
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { userName, loggedIn } = this.state
    const { removeSession } = this.props
    console.log(window.localStorage)
    return (
      <div>
        <h1>Hello, {userName}</h1>
        {loggedIn ? (
          <div>
            <h1>Welcome Back</h1>
            <button onClick={() => window.sessionStorage.removeItem('session_id')}>
              Remove guest session ID
            </button>
            <TMDBAccount />
            <button onClick={() => removeSession()}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Please sign Up</h1>

            <div>
              <button onClick={this.handleGetTokenThenVerify}>
                Get token then verify
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.userAccountReducer
})

const mapDispatchToProps = (dispatch) => ({
  requestToken: () => dispatch(requestToken()),
  createSessionWithToken: () =>
    dispatch(createSessionWithToken(window.localStorage['token'])),
  removeSession: () => dispatch(removeTMDBSession(window.localStorage['session']))
})

export const ConnectedUserAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccount)

export const UserAccountRoute = () => (
  <Route path='/user/account' component={ConnectedUserAccount} />
)
