import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { fetchDetails } from '../../../redux/actions'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
`

class DetailedResults extends Component {
  /** Renders the current selected item if page refreshes */
  componentDidMount() {
    this.fetchDetailedData()
  }

  componentWillReceiveProps = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      console.log('Route changed')
    }

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
    if (!this.props.details.id) return <div />
    const { details: item } = this.props
    console.log(this.props.match.params)
    return (
      <Wrapper>
        <h1>{item.original_title ? item.original_title : item.name}</h1>
        <p>{item.overview}</p>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  details: state.detailsReducer,
})

const mapDispatchToProps = (dispatch) => ({
  getDetailedResults: (mediaType, id) => dispatch(fetchDetails(mediaType, id)),
})

const ConnectedDetailedResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedResults)

export const DetailedResultsRoute = () => (
  <Route path={'/item/:mediaType/:id'} component={ConnectedDetailedResults} />
)
