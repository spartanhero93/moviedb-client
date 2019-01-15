import React, { Component } from 'react'
import axios from 'axios'

export default class Details extends Component {
  state = {
    data: {},
  }

  fetchDetails = async () => {
    try {
      const { data } = await axios.get(`
      https://api.themoviedb.org/3/account?api_key=MY_API_KEY&session_id=${
        window.localStorage['tmdb token']
      }`)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    console.log(window.localStorage)
    return (
      <div>
        <h1>Details!</h1>
        <button onClick={this.fetchDetails}>Fetch details</button>
      </div>
    )
  }
}
