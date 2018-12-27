import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class DetailedResults extends Component {
  render() {
    console.log(this.props)
    if (!this.props.details.id) return <div>Loading...</div>
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  details: state,
})

const ConnectedDetailedResults = connect(mapStateToProps)(DetailedResults)

export const DetailedResultsRoute = () => (
  <Route path={'/item/:id'} component={ConnectedDetailedResults} />
)
