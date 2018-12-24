import React, { Component } from 'react'
import {
  Wrapper,
  StyledToolTip,
  ToolTipTitle,
  ToolTipReleaseDate,
  Card,
  CardGenre,
  CardImg,
  CardRating,
  CardTitle
} from './styles'
import { getGenreFromId } from '../../helpers/genreLookup'
import NoImage2 from '../../icons/404-notfound.png'
import Tooltip from '@material-ui/core/Tooltip'

export default class ResultsMapper extends Component {
  getImageUrl = (item) => {
    const imgURL = 'https://image.tmdb.org/t/p/w500'

    if (item.poster_path) {
      return imgURL + item.poster_path
    } else if (item.profile_path) {
      return imgURL + item.profile_path
    } else {
      return NoImage2
    }
  }
  returnOnlyYear = (date) => date.split('').splice(0, 4)
  returnOnly20Chars = (title) =>
    title.length > 20 ? title.split('').splice(0, 20).join('') + '...' : title

  render() {
    const { results } = this.props
    const { mediaType } = this.props

    const Title = (item) => (
      <StyledToolTip>
        <ToolTipTitle>{item.name ? item.name : item.title}</ToolTipTitle>
        <ToolTipReleaseDate>
          {item.release_date ? (
            this.returnOnlyYear(item.release_date)
          ) : (
            this.returnOnlyYear(item.first_air_date)
          )}
        </ToolTipReleaseDate>
        <p>{item.overview}</p>
      </StyledToolTip>
    )

    console.log(this.props)
    return (
      <div>
        <Wrapper>
          {results.map((item) => (
            <Tooltip
              key={item.id}
              title={Title(item)}
              disableFocusListener
              disableTouchListener
            >
              <Card>
                <CardImg src={this.getImageUrl(item)} />
                <CardTitle>
                  {item.title ? (
                    this.returnOnly20Chars(item.title)
                  ) : (
                    this.returnOnly20Chars(item.name)
                  )}
                </CardTitle>
                {item.genre_ids ? (
                  <CardGenre>
                    {getGenreFromId(item.genre_ids).map((item) => (
                      <span key={item.id ? item.id : ''}>
                        {item.name ? item.name : item.popularity}
                      </span>
                    ))}
                  </CardGenre>
                ) : (
                  ''
                )}
                <CardRating>{item.vote_average}</CardRating>
              </Card>
            </Tooltip>
          ))}
        </Wrapper>
      </div>
    )
  }
}
