import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTVShows } from '../../../redux/actions'
import ResultsMapper from '../../../helpers/ResultsMapper'
import { Button } from '@material-ui/core'

class Popular extends Component {
  componentDidMount() {
    this.props.fetchTVShows('popular')
  }

  render() {
    const { state, fetchTVShows } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...state} />
        <Button onClick={() => fetchTVShows('popular', state.page - 1)}>
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button onClick={() => fetchTVShows('popular', state.page + 1)}>
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

const ConnectedPopular = connect(mapStateToProps, mapDispatchToProps)(Popular)
export default ConnectedPopular
