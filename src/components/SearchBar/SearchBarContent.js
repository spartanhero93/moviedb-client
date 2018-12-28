import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsMapper from '../ResultsMapper'
import { searchAPI } from '../../redux/actions'
import { Button } from '@material-ui/core'

class SearchBarContent extends Component {
  render() {
    const { state, fetchMovies } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...state} />
        <Button
          onClick={() =>
            fetchMovies(state.query, state.page - 1, state.total_pages)
          }
        >
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button
          onClick={() =>
            fetchMovies(state.query, state.page + 1, state.total_pages)
          }
        >
          Next Page
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({
  fetchMovies: (query, pageNum, total_pages) =>
    dispatch(searchAPI(query, pageNum, total_pages)),
})
const ConnectedSearchBarContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContent)

export default ConnectedSearchBarContent
