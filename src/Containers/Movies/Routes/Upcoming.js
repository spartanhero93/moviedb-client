import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import { Button } from '@material-ui/core'
import MoviesMapper from '../../../helpers/ResultsMapper'

class Upcoming extends Component {
  componentDidMount() {
    this.props.fetchMovies('upcoming')
  }

  render() {
    const { state, fetchMovies } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <MoviesMapper {...state} />
        <Button onClick={() => fetchMovies('upcoming', state.page - 1)}>
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button onClick={() => fetchMovies('upcoming', state.page + 1)}>
          Next Page
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (type, pageNum) => dispatch(fetchMovies(type, pageNum))
})

const ConnectedUpcoming = connect(mapStateToProps, mapDispatchToProps)(Upcoming)
export default ConnectedUpcoming
