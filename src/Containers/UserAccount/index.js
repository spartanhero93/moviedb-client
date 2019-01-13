import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { newGuestSession, get_API_KEY_FROM_SERVER } from '../../API/MovieDB'
import { URL } from '../../API/serverURL'
import TMDBAccount from './TMDBUser'

export class UserAccount extends Component {
  state = {
    userName: 'Guest',
    data: {},
    loggedIn: false
  }

  componentDidMount() {
    window.localStorage['tmdb token']
      ? this.setState({ loggedIn: true, userName: 'TMDB User' })
      : window.sessionStorage['guest session_id']
      ? this.setState({ loggedIn: true, userName: 'Guest' })
      : this.setState({ loggedIn: false })
  }

  testGuestSession = async () => {
    const data = await newGuestSession()
    this.setState({ data, loggedIn: true })
    window.sessionStorage.setItem(
      'guest session_id',
      this.state.data.guest_session_id
    )
  }
  handleSignUpWithTMDBAccount = async () => {
    try {
      const api_key = await get_API_KEY_FROM_SERVER()
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key}`
      )
      await window.localStorage.setItem('tmdb token', data.request_token)
      await document.location.assign(
        `https://www.themoviedb.org/authenticate/${
          data.request_token
        }?redirect_to=http://localhost:3000/user/account`
      )
    } catch (error) {
      console.error(error)
    }
  }

  createSessionWithToken = async () => {
    try {
      const api_key = await get_API_KEY_FROM_SERVER()
      const { data } = await axios.post(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${api_key}d`,
        {
          request_token: window.localStorage.getItem('tmdb token')
        }
      )
      await window.localStorage.setItem('tmdb session_id', data.session_id)
      console.log(data)
      console.log(window.localStorage.getItem('tmdb session_id'))
    } catch (error) {
      console.error(error)
    }
  }

  removeGuestSessionID = () => {
    window.sessionStorage.removeItem('guest session_id')
    this.setState({ loggedIn: false })
  }
  removeTMDBSessionID = async () => {
    try {
      const api_key = await get_API_KEY_FROM_SERVER()
      const { data } = await axios.delete(
        `https://api.themoviedb.org/3/authentication/session?api_key=${api_key}`,
        {
          data: {
            session_id: window.localStorage.getItem('tmdb session_id')
          }
        }
      )
      window.localStorage.removeItem('tmdb session_id')
      window.localStorage.removeItem('tmdb token')
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { userName, loggedIn } = this.state
    console.log(this.state.data)
    console.log(window.localStorage['tmdb token'])
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
            <button onClick={this.removeTMDBSessionID}>
              Remove TMDB session
            </button>
            <TMDBAccount />
          </div>
        ) : (
          <div>
            <h1>Please sign Up</h1>

            <div>
              <button
                onClick={this.testGuestSession}
                color='primary'
                type='outlined'
              >
                New Guest Session
              </button>
              <button onClick={this.handleSignUpWithTMDBAccount}>
                Sign in with TMDB account
              </button>
              <div>
                <button onClick={this.createSessionWithToken}>
                  Check if TMDB Validated token
                </button>
              </div>
            </div>
          </div>
        )}
        <button onClick={this.removeGuestSessionID}>
          Test if user has session stored
        </button>
      </div>
    )
  }
}

export const UserAccountRoute = () => (
  <Route path='/user/account' component={UserAccount} />
)
