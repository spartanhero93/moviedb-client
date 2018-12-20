import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTVShows } from '../../../redux/actions'
import ResultsMapper from '../../../helpers/ResultsMapper'

import { Button } from '@material-ui/core'

class AiringToday extends Component {
  componentDidMount() {
    this.props.fetchTVShows('airing_today')
  }

  render() {
    const { state, fetchTVShows } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...state} />
        <Button
          onClick={() =>
            fetchTVShows('airing_today', state.page - 1, state.total_pages)}
        >
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button
          onClick={() =>
            fetchTVShows('airing_today', state.page + 1, state.total_pages)}
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
  fetchTVShows: (type, pageNum) => dispatch(fetchTVShows(type, pageNum))
})

const ConnectedAiring_today = connect(mapStateToProps, mapDispatchToProps)(
  AiringToday
)
export default ConnectedAiring_today
