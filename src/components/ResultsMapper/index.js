import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
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
import { getGenreFromId, getImageUrl, returnOnlyYear } from '../../helpers'
import { fetchDetails } from '../../redux/actions'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  Tooltip: {
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
})

class ResultsMapper extends Component {
  /** Helper functions */
  componentWillReceiveProps() {
    window.scrollTo(0, 0)
  }

  render() {
    const { results, mediaType, getDetailedResults } = this.props
    const Title = item => (
      <StyledToolTip>
        <ToolTipTitle>{item.name ? item.name : item.title}</ToolTipTitle>
        {item.release_date || item.first_air_date ? (
          <ToolTipReleaseDate>
            {item.release_date
              ? returnOnlyYear(item.release_date)
              : returnOnlyYear(item.first_air_date)}
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
    const { classes } = this.props
    return (
      <Wrapper>
        {results.map(item => (
          <Tooltip
            key={item.id}
            title={Title(item)}
            disableTouchListener
            TransitionComponent={Fade}
            enterDelay={200}
            leaveDelay={200}
            classes={{ tooltip: classes.Tooltip }}
            PopperProps={{ style: { pointerEvents: 'none' } }}
          >
            <Card>
              <CardImg src={getImageUrl(item)} />
              <NavLink
                to={`/item/${mediaType ? mediaType : item.media_type}/${
                  item.id
                }`}
                exact
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() =>
                  mediaType
                    ? getDetailedResults(mediaType, item.id)
                    : getDetailedResults(item.media_type, item.id)
                }
              >
                <CardTitle>{item.title ? item.title : item.name}</CardTitle>
              </NavLink>
              <CardRating>
                {item.vote_average
                  ? item.vote_average.toFixed(1)
                  : item.popularity.toFixed(1)}
              </CardRating>
            </Card>
          </Tooltip>
        ))}
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getDetailedResults: (mediaType = 'person', id) =>
    dispatch(fetchDetails(mediaType, id)),
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(ResultsMapper)))
