import React, { Component } from 'react'
import { Button } from '@material-ui/core'

import MoviesMapper from '../helpers/MoviesMapper'
import { fetchFromDatabase } from '../../../API'

export default class TopRated extends Component {
  state = {
    data: {},
    currentPage: 1
  }

  async componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async (pageNum) => {
    try {
      if (pageNum === 0 || pageNum >= this.state.data.total_pages) {
        return alert('Stop')
      } else {
        const data = await fetchFromDatabase('top_rated', pageNum)
        this.setState({ data })
        if (pageNum) {
          this.setState({ currentPage: pageNum })
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { data, currentPage } = this.state
    if (!data.results) return <div>Loading...</div>
    return (
      <div>
        <MoviesMapper {...data} />
        <Button onClick={() => this.fetchMovies(currentPage - 1)}>
          Previous Page
        </Button>
        <span>
          Current page {data.page} of {data.total_pages} pages
        </span>
        <Button onClick={() => this.fetchMovies(currentPage + 1)}>
          Next Page
        </Button>
      </div>
    )
  }
}
