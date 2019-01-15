import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTVShows } from '../../../redux/actions'
import ResultsMapper from '../../../components/ResultsMapper/'

import { Button } from '@material-ui/core'

class AiringToday extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.list !== this.props.match.params.list) {
      this.fetchData()
    }
  }

  fetchData() {
    this.props.fetchTVShows(this.props.match.params.list)
  }

  render() {
    const { TVState, fetchTVShows } = this.props
    if (!TVState.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...TVState} mediaType='tv' />
        <Button
          onClick={() =>
            fetchTVShows(
              this.props.match.params.list,
              TVState.page - 1,
              TVState.total_pages
            )
          }
        >
          Previous Page
        </Button>
        <span>
          Current page {TVState.page} of {TVState.total_pages} pages
        </span>
        <Button
          onClick={() =>
            fetchTVShows(
              this.props.match.params.list,
              TVState.page + 1,
              TVState.total_pages
            )
          }
        >
          Next Page
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  TVState: state.mediaReducer,
})

const mapDispatchToProps = dispatch => ({
  fetchTVShows: (type, pageNum) => dispatch(fetchTVShows(type, pageNum)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AiringToday)
