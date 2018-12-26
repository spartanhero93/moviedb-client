import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { newGuestSession } from '../../API'

export class UserAccount extends Component {
  state = {
    userName: 'Guest',
    data: {},
    loggedIn: false,
  }

  handelLoggingButton = () => {
    this.setState((prevState) => ({ loggedIn: !prevState.loggedIn }))
  }

  testGuestSession = async () => {
    const data = await newGuestSession()
    console.log(data)
  }

  render() {
    const { userName, loggedIn } = this.state
    return (
      <div>
        <h1>Hello, {userName}</h1>
        {loggedIn ? (
          <div>
            <h1>Welcome Back</h1>
          </div>
        ) : (
          <div>
            <h1>Please sign Up</h1>
          </div>
        )}
        <button onClick={this.handelLoggingButton}>
          Test the logged in feature
        </button>
        <div>
          <Button
            onClick={this.testGuestSession}
            color="inherit"
            type="outlined"
          >
            New Guest Session
          </Button>
          <Button color="inherit" type="outlined">
            Sign Up
          </Button>
        </div>
      </div>
    )
  }
}

export const UserAccountRoute = () => (
  <Route path="/user/account" component={UserAccount} />
)
