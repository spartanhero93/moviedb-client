import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Button } from "@material-ui/core"
import { newGuestSession } from "../../API/MovieDB"

export class UserAccount extends Component {
  state = {
    userName: "Guest",
    data: {},
    loggedIn: false
  }

  componentDidMount() {
    window.sessionStorage.getItem("session_id")
      ? this.setState({ loggedIn: true })
      : this.setState({ loggedIn: false })
  }

  testGuestSession = async () => {
    const data = await newGuestSession()
    this.setState({ data, loggedIn: true })
    window.sessionStorage.setItem(
      "session_id",
      this.state.data.guest_session_id
    )
  }

  render() {
    const { userName, loggedIn } = this.state
    console.log(this.state.data)
    return (
      <div>
        <h1>Hello, {userName}</h1>
        {loggedIn ? (
          <div>
            <h1>Welcome Back</h1>
            <Button
              onClick={() =>
                console.log(window.sessionStorage.getItem("session_id"))
              }
            >
              Test if user has session stored
            </Button>
          </div>
        ) : (
          <div>
            <h1>Please sign Up</h1>

            <div>
              <Button
                onClick={this.testGuestSession}
                color='inherit'
                type='outlined'
              >
                New Guest Session
              </Button>
              <Button color='inherit' type='outlined'>
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export const UserAccountRoute = () => (
  <Route path='/user/account' component={UserAccount} />
)
