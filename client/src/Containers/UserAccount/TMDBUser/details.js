import React, { Component } from 'react'
import axios from 'axios'

export default class Details extends Component {
  state = {
    data: {},
  }

  fetchDetails = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/account?api_key=${api_key}&session_id=${
        window.localStorage['session_id']
      }`)
      window.sessionStorage.setItem('id', data.id)
      this.setState({ data })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const { data: my } = this.state
    return (
      <div>
        <h1>Details!</h1>
        <button onClick={this.fetchDetails}>Fetch details</button>
        <div>
          <h1>{my.username}</h1>
          <h5>{my.id}</h5>
        </div>
      </div>
    )
  }
}
