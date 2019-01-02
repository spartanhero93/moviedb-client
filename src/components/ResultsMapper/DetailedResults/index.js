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
  Person,
} from './styles'
import { getImageUrl, getBackdropURL, getGenreFromId } from '../../../helpers'

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
          <ItemYearReleased>
            Released{' '}
            {item.release_date ? item.release_date : item.first_air_date}
          </ItemYearReleased>
        </TitleYearContainer>
        <Container>
          <img src={getImageUrl(item)} alt={item.id} />
          <ItemOverview>{item.overview}</ItemOverview>
          {item.genres ? (
            item.genres.map(item => <span>{item.name}</span>)
          ) : (
            <Person>
              {item.also_known_as.map(name => (
                <div>{name}</div>
              ))}
              <h1>{item.place_of_birth}</h1>
              <h1>{item.birthday}</h1>
              <h1>{item.homepage}</h1>
            </Person>
          )}
        </Container>
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
