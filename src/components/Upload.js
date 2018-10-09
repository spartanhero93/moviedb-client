import React, { Component } from 'react'
import DOMAIN from '../config'

class Upload extends Component {
  state = {}

  handleFormSubmit = e => {
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value
    console.log(password)
    axios.post(`${DOMAIN}/register`, {
      name,
      password
    })
  }

  render () {
    return (
      <div>
        <h1>Upload a link to the image</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type='text' name='name' />
          <input type='password' name='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Upload
