import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import { Button } from '@material-ui/core'
import ResultsMapper from '../../../helpers/ResultsMapper'

class NowPlaying extends Component {
  componentDidMount() {
    this.props.fetchMovies('now_playing')
  }

  render() {
    const { state, fetchMovies } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...state} />
        <Button onClick={() => fetchMovies('now_playing', state.page - 1)}>
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button onClick={() => fetchMovies('now_playing', state.page + 1)}>
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

const ConnectedNowPlaying = connect(mapStateToProps, mapDispatchToProps)(
  NowPlaying
)
export default ConnectedNowPlaying
