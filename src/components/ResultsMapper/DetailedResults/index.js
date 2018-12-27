import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDetails } from '../../../redux/actions'

class DetailedResults extends Component {
  componentDidMount() {
    this.fetchDetailedData()
  }

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchDetailedData()
    }
  }

  fetchDetailedData() {
    this.props.getDetailedResults(
      this.props.match.params.mediaType,
      this.props.match.params.id
    )
  }
  render() {
    console.log(this.props.match.params)
    if (!this.props.details.id) return <div>Loading...</div>
    const { details: item } = this.props
    return (
      <div>
        <h1>{item.original_title ? item.original_title : item.name}</h1>
        <p>{item.overview}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  details: state,
})

const mapDispatchToProps = dispatch => ({
  getDetailedResults: (mediaType, id) => dispatch(fetchDetails(mediaType, id)),
})

const ConnectedDetailedResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedResults)

export const DetailedResultsRoute = () => (
  <Route path={'/item/:mediaType/:id'} component={ConnectedDetailedResults} />
)
