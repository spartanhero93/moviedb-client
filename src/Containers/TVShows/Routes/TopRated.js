import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTVShows } from '../../../redux/actions'
import TVResultsMapper from '../../../helpers/TVResultsMapper'
import { Button } from '@material-ui/core'

class TopRated extends Component {
  componentDidMount() {
    this.props.fetchTVShows('top_rated')
  }

  render() {
    const { state, fetchTVShows } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <TVResultsMapper {...state} />
        <Button onClick={() => fetchTVShows('top_rated', state.page - 1)}>
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button onClick={() => fetchTVShows('top_rated', state.page + 1)}>
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

const ConnectedTopRated = connect(mapStateToProps, mapDispatchToProps)(TopRated)
export default ConnectedTopRated
