import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { requestToken, createSessionWithToken } from '../../redux/actions'
import TMDBAccount from './TMDBUser'

class UserAccount extends Component {
  state = {
    userName: 'Guest',
    data: {},
    loggedIn: false,
  }

  componentDidMount() {
    window.localStorage['session']
      ? this.setState({ loggedIn: true, userName: 'TMDB User' })
      : window.localStorage['guest session']
      ? this.setState({ loggedIn: true, userName: 'Guest' })
      : this.setState({ loggedIn: false })

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

  // testGuestSession = async () => {
  //   const data = await newGuestSession()
  //   this.setState({ data, loggedIn: true })
  //   window.sessionStorage.setItem(
  //     'guest session_id',
  //     this.state.data.guest_session_id
  //   )
  // }
  // handleSignUpWithTMDBAccount = async () => {
  //   try {
  //     const api_key = await get_API_KEY_FROM_SERVER()
  //     const { data: initialData } = await axios.get(
  //       `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`
  //     )

  //     alert(`request token: ${initialData.request_token}`)
  //     window.localStorage.setItem('tmdb token', initialData.request_token)
  //     document.location.assign(
  //       `https://www.themoviedb.org/authenticate/${
  //         initialData.request_token
  //       }?redirect_to=http://localhost:3000/user/account`
  //     )
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // createSessionWithToken = async () => {
  //   try {
  //     const api_key = await get_API_KEY_FROM_SERVER()
  //     const { data } = await axios.post(
  //       `https://api.themoviedb.org/3/authentication/session/new?api_key=${api_key}`,
  //       {
  //         request_token: window.localStorage['tmdb token'],
  //       }
  //     )
  //     window.localStorage.setItem('tmdb session_id', data.session_id)
  //     this.setState({ loggedIn: true, userName: 'TMDB User' })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  removeGuestSessionID = () => {
    window.sessionStorage.removeItem('guest session_id')
    this.setState({ loggedIn: false })
  }
  // removeTMDBSessionID = async () => {
  //   try {
  //     const api_key = await get_API_KEY_FROM_SERVER()
  //     const { data } = await axios.delete(
  //       `https://api.themoviedb.org/3/authentication/session?api_key=${api_key}`,
  //       {
  //         data: {
  //           session_id: window.localStorage.getItem('tmdb session_id'),
  //         },
  //       }
  //     )
  //     window.localStorage.removeItem('tmdb session_id')
  //     window.localStorage.removeItem('tmdb token')
  //     console.log(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render() {
    const { userName, loggedIn } = this.state
    const { requestToken, createSessionWithToken, data } = this.props
    console.log(window.localStorage)
    return (
      <div>
        <h1>Hello, {userName}</h1>
        {loggedIn ? (
          <div>
            <h1>Welcome Back</h1>
            <button
              onClick={() => window.sessionStorage.removeItem('session_id')}
            >
              Remove guest session ID
            </button>
            {/* <button onClick={this.removeTMDBSessionID}>
              Remove TMDB session
            </button> */}
            <TMDBAccount />
          </div>
        ) : (
          <div>
            <h1>Please sign Up</h1>

            <div>
              <button onClick={this.handleGetTokenThenVerify}>
                Get token then verify
              </button>
              <div>
                <button onClick={() => createSessionWithToken()}>
                  Create session
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.userAccountReducer,
})

const mapDispatchToProps = dispatch => ({
  requestToken: () => dispatch(requestToken()),
  createSessionWithToken: () =>
    dispatch(createSessionWithToken(window.localStorage['token'])),
})

export const ConnectedUserAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccount)

export const UserAccountRoute = () => (
  <Route path='/user/account' component={ConnectedUserAccount} />
)
