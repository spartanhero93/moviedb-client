import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTVShows } from '../../../redux/actions'
import ResultsMapper from '../../../helpers/ResultsMapper'

import { Button } from '@material-ui/core'

class CurrentlyOnAir extends Component {
  componentDidMount() {
    this.props.fetchTVShows('on_the_air')
  }

  render() {
    const { state, fetchTVShows } = this.props
    if (!state.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...state} />
        <Button onClick={() => fetchTVShows('on_the_air', state.page - 1)}>
          Previous Page
        </Button>
        <span>
          Current page {state.page} of {state.total_pages} pages
        </span>
        <Button onClick={() => fetchTVShows('on_the_air', state.page + 1)}>
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

const ConnectedCurrentlyOnAir = connect(mapStateToProps, mapDispatchToProps)(
  CurrentlyOnAir
)
export default ConnectedCurrentlyOnAir
