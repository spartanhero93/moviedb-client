import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserAccount extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, User</h1>
      </div>
    )
  }
}

const ConnectedUserAccount = connect()

export default UserAccount
