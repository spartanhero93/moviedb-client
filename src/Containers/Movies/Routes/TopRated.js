import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import { Button } from '@material-ui/core'
import ResultsMapper from '../../../helpers/ResultsMapper'

class TopRated extends Component {
  componentDidMount() {
    this.props.fetchMovies('top_rated')
  }

  render() {
    const { state, fetchMovies } = this.props
    console.log(state)
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...state} />
        <Button
          onClick={() =>
            fetchMovies('top_rated', state.page - 1, state.total_pages)}
        >
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button
          onClick={() =>
            fetchMovies('top_rated', state.page + 1, state.total_pages)}
        >
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

const ConnectedTopRated = connect(mapStateToProps, mapDispatchToProps)(TopRated)
export default ConnectedTopRated
