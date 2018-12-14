import React, { Component } from 'react'
import MoviesMapper from './MoviesMapper'
import { fetchFromDatabase } from '../../API'

export default class Movies extends Component {
  state = {
    dataLoaded: false,
    topRated: {},
    nowPlaying: {},
    upcoming: {},
    popular: {}
  }

  async componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async (pageNum) => {
    try {
      const nowPlaying = await fetchFromDatabase('now_playing')
      const topRated = await fetchFromDatabase('now_playing')
      const upcoming = await fetchFromDatabase('upcoming')
      const popular = await fetchFromDatabase('popular')

      this.setState({ nowPlaying, topRated, upcoming, popular, dataLoaded: true })
    } catch (error) {
      throw new Error(error)
    }
  }

  render() {
    const { dataLoaded, topRated, nowPlaying, upcoming, popular } = this.state
    if (!dataLoaded) return <div>Loading...</div>
    return (
      <div>
        <h1>This is the Movies Component</h1>
        <MoviesMapper {...topRated} type='Top Rated' />
        <MoviesMapper {...nowPlaying} type='Now Playing' />
        <MoviesMapper {...upcoming} type='Upcoming' />
        <MoviesMapper {...popular} type='popular' />
      </div>
    )
  }
}
