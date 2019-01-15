import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDetails } from '../../../redux/actions'
import {
  Wrapper,
  Container,
  ItemTitle,
  ItemOverview,
  TitleYearContainer,
  TVDetailsContainer,
  TVNetworks,
  MovieDetailsContainer,
  PersonDetailsContainer,
} from './styles'
import { getImageUrl, getBackdropURL } from '../../../helpers'

function checkIfTVOrMovieOrPerson(item) {
  if (item.first_air_date) {
    return (
      <TVDetailsContainer>
        <Container>
          <ItemOverview>{item.overview}</ItemOverview>
        </Container>
        <Container>
          <div>
            <div>Released: {item.first_air_date}</div>
            <div>Seasons: {item.number_of_seasons}</div>
            Number of episodes: {item.number_of_episodes}
            <br />
            {item.next_episode_to_air ? (
              <div>
                Next episode air date: {item.next_episode_to_air.air_date}
              </div>
            ) : (
              <div>Last aired episode: {item.last_air_date}</div>
            )}
          </div>
          <div>
            <h4>Homepage: {item.homepage}</h4>
            <div>
              {item.networks.map(network => (
                <TVNetworks key={network.id}>
                  <img src={getImageUrl(network)} />
                  <div>{network.name}</div>
                </TVNetworks>
              ))}
            </div>
          </div>
        </Container>
        <div>Rating: {item.vote_average}</div>
      </TVDetailsContainer>
    )
  } else if (item.release_date) {
    return (
      <MovieDetailsContainer>
        <Container>
          <ItemOverview>{item.overview}</ItemOverview>
        </Container>
        <div>Released: {item.release_date}</div>
        <div>
          Budget: {item.budget}
          <br />
          Revenue: {item.revenue}
        </div>
        <div>Tagline: {item.tagline}</div>
        <div>Rating: {item.vote_average}</div>
      </MovieDetailsContainer>
    )
  } else {
    return (
      <PersonDetailsContainer>
        <div>Biography: {item.biography}</div>
        <div>Birthday: {item.birthday}</div>
        <div>Died: {item.deathday ? item.deathday : 'Not Yet!'}</div>
        <div>Place of birth: {item.place_of_birth}</div>
        <div>Popularity: {item.popularity}</div>
      </PersonDetailsContainer>
    )
  }
}

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

  render() {
    if (!this.props.details.id) return <div />
    const { details: item } = this.props
    console.log(item)
    return (
      <Wrapper>
        <TitleYearContainer backdrop={getBackdropURL(item.backdrop_path)}>
          <ItemTitle>{item.title ? item.title : item.name}</ItemTitle>
        </TitleYearContainer>

        <div style={{ padding: '1rem' }}>
          {checkIfTVOrMovieOrPerson(item)}
          <div>
            <h1>Rate this {item.mediaType.toUpperCase()}</h1>
            <div>
              <input
                onChange={this.handleRating}
                type='number'
                min='0'
                max='10'
              />
              <button onClick={this.submitRating}>Rate me</button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  details: state.detailsReducer,
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
