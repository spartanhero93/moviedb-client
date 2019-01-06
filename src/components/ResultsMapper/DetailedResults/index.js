import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDetails } from '../../../redux/actions'
import {
  Wrapper,
  Container,
  ItemTitle,
  ItemYearReleased,
  ItemOverview,
  TitleYearContainer,
  TVDetailsContainer,
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
        <div>Released: {item.first_air_date}</div>
        <div>Seasons: {item.number_of_seasons}</div>
        <div>
          Number of episodes: {item.number_of_episodes}
          <br />
          Next episode air date: {item.next_episode_to_air.air_date}
        </div>
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
  /** Renders the current selected item if page refreshes */
  componentDidMount() {
    this.fetchDetailedData()
  }

  componentWillReceiveProps = prevProps => {
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
    console.log(item)
    return (
      <Wrapper>
        <TitleYearContainer backdrop={getBackdropURL(item.backdrop_path)}>
          <ItemTitle>{item.title ? item.title : item.name}</ItemTitle>
        </TitleYearContainer>

        {checkIfTVOrMovieOrPerson(item)}
        {/* <div>
          {item.genres ? (
            item.genres.map(item => <span key={item.id}>{item.name}</span>)
          ) : (
            <Person>
              {item.also_known_as.map(name => (
                <div key={name}>{name}</div>
              ))}
              <h1>{item.place_of_birth}</h1>
              <h1>{item.birthday}</h1>
              <h1>{item.homepage}</h1>
            </Person>
          )}
          <div>
            <a href={item.homepage}>{item.homepage}</a>
          </div>
          <div>
            {item.seasons
              ? item.seasons.map(season => (
                  <div>
                    <div>{season.air_date}</div>
                    <div>{season.episode_count}</div>
                    <div>
                      <img src={getImageUrl(season)} alt={season.name} />
                    </div>
                  </div>
                ))
              : item.revenue}
          </div>
        </div> */}
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
