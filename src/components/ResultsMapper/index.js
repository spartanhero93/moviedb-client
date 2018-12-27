import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  Wrapper,
  StyledToolTip,
  ToolTipTitle,
  ToolTipReleaseDate,
  Card,
  CardGenre,
  CardImg,
  CardRating,
  CardTitle,
} from './styles'
import { fetchDetails } from '../../redux/actions'
import { getGenreFromId } from '../../helpers/genreLookup'
import NoImage2 from '../../icons/404-notfound.png'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'

class ResultsMapper extends Component {
  getImageUrl = item => {
    const imgURL = 'https://image.tmdb.org/t/p/w500'

    if (item.poster_path) {
      return imgURL + item.poster_path
    } else if (item.profile_path) {
      return imgURL + item.profile_path
    } else {
      return NoImage2
    }
  }
  returnOnlyYear = date => date.split('').splice(0, 4)
  returnOnly12Chars = title =>
    title.length > 12
      ? title
          .split('')
          .splice(0, 12)
          .join('') + '...'
      : title

  render() {
    const { results, mediaType } = this.props

    const Title = item => (
      <StyledToolTip>
        <ToolTipTitle>{item.name ? item.name : item.title}</ToolTipTitle>
        {item.release_date || item.first_air_date ? (
          <ToolTipReleaseDate>
            {item.release_date
              ? this.returnOnlyYear(item.release_date)
              : this.returnOnlyYear(item.first_air_date)}
          </ToolTipReleaseDate>
        ) : (
          <div>
            {item.known_for
              ? item.known_for.map(item => <span>{item.name}</span>)
              : ''}
          </div>
        )}
        {item.genre_ids ? (
          <CardGenre>
            {getGenreFromId(item.genre_ids).map(item => (
              <span key={item.id ? item.id : ''}>
                {item.name ? item.name + ',  ' : item.popularity}
              </span>
            ))}
          </CardGenre>
        ) : (
          ''
        )}

        <p>{item.overview}</p>
      </StyledToolTip>
    )

    return (
      <div>
        <Wrapper>
          {results.map(item => (
            <Tooltip
              key={item.id}
              title={Title(item)}
              disableFocusListener
              disableTouchListener
              TransitionComponent={Fade}
              enterDelay={200}
              leaveDelay={200}
            >
              <Card>
                <CardImg src={this.getImageUrl(item)} />
                <NavLink
                  to={`/item/${mediaType}/${item.id}`}
                  exact
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() =>
                    this.props.getDetailedResults(this.props.mediaType, item.id)
                  }
                >
                  <CardTitle>
                    {item.title
                      ? this.returnOnly12Chars(item.title)
                      : this.returnOnly12Chars(item.name)}
                  </CardTitle>
                </NavLink>

                <CardRating>{item.vote_average}</CardRating>
              </Card>
            </Tooltip>
          ))}
        </Wrapper>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getDetailedResults: (mediaType, id) => dispatch(fetchDetails(mediaType, id)),
})

export default connect(
  null,
  mapDispatchToProps
)(ResultsMapper)
