import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResultsMapper from '../../components/ResultsMapper'
import { searchAPI } from '../../redux/actions'
import { Button } from '@material-ui/core'

class SearchBarContent extends Component {
  render() {
    const { queryResults, fetchMovies } = this.props
    if (!queryResults.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...queryResults} />
        <Button
          onClick={() =>
            fetchMovies(
              queryResults.query,
              queryResults.page - 1,
              queryResults.total_pages
            )
          }
        >
          Previous Page
        </Button>
        <span>
          Current page {queryResults.page} of {queryResults.total_pages} pages
        </span>
        <Button
          onClick={() =>
            fetchMovies(
              queryResults.query,
              queryResults.page + 1,
              queryResults.total_pages
            )
          }
        >
          Next Page
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ queryResults: state.mediaReducer })
const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (query, pageNum, total_pages) =>
    dispatch(searchAPI(query, pageNum, total_pages)),
})
const ConnectedSearchBarContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContent)

export default ConnectedSearchBarContent
