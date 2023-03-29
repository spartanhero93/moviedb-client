import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDetails } from '../../../redux/actions'
import { Wrapper, ItemTitle, TitleYearContainer } from './styles'
import { CheckMediaTypeHelper } from './helper'
import { getBackdropURL } from '../../../helpers'

class DetailedResults extends Component {
  state = {
    rating: 0,
  }

  componentDidMount() {
    this.fetchDetailedData()
  }

  componentWillReceiveProps = prevProps => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchDetailedData()
    }
    window.scrollTo(0, 0)
  }

  fetchDetailedData() {
    this.props.getDetailedResults(
      this.props.match.params.mediaType,
      this.props.match.params.id
    )
  }

  handleRating = event => {
    this.setState({ rating: event.target.value })
  }

  submitRating = async () => {
    try {
      alert(this.state.rating)
    } catch (error) {
      console.error(error)
    }
  }

  handleMarkAsFavorite = async () => {}

  render() {
    if (!this.props.details.id) return <div />
    const { details: item } = this.props
    console.log(this.props)
    return (
      <Wrapper>
        <TitleYearContainer backdrop={getBackdropURL(item.backdrop_path)}>
          <ItemTitle>{item.title ? item.title : item.name}</ItemTitle>
        </TitleYearContainer>

        <div style={{ padding: '1rem' }}>
          {CheckMediaTypeHelper(item)}
          <div>
            <div>
              <h1>Rate this {item.mediaType.toUpperCase()}</h1>
              <input onChange={this.handleRating} type='number' min='0' max='10' />
              <button onClick={this.submitRating}>Rate me</button>
            </div>
            <div>
              <button>Add to watchList</button>
              <button>Add to favorites</button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ detailsReducer }) => ({
  details: detailsReducer,
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
