import React, { Component } from 'react'
import styled from 'styled-components'
import { getGenreFromId } from './genreLookup'
import NoImage2 from '../icons/404-notfound.png'
import Tooltip from '@material-ui/core/Tooltip'

// const movies = item.poster_path
// const person = item.profile_path

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
  render() {
    const { results } = this.props
    const { type } = this.props
    return (
      <div>
        <Title>{type}</Title>
        <Wrapper>
          {results.map((item) => (
            <Tooltip
              key={item.id}
              title={item.overview ? item.overview : ''}
              disableFocusListener
              disableTouchListener
            >
              <Result>
                <ResultImg src={this.getImageUrl(item)} />
                <ResultTitle>{item.title ? item.title : item.name}</ResultTitle>
                {item.genre_ids ? (
                  <ResultGenre>
                    {getGenreFromId(item.genre_ids).map((item) => (
                      <span key={item.id ? item.id : ''}>
                        {item.name ? item.name : item.popularity}
                      </span>
                    ))}
                  </ResultGenre>
                ) : (
                  ''
                )}
                <ResultRating>{item.vote_average}</ResultRating>
              </Result>
            </Tooltip>
          ))}
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.div`
  color: white;
  padding: 2rem 3rem;
  display: flex;
  flex-wrap: wrap;
  /* overflow-x: scroll; */
  @media (max-width: 900px) {
    padding: 0;
  }
`
const Title = styled.div`
  font-weight: 200;
  width: 100%;
`
const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  height: 26rem;
  width: 14rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    /* transform: scale(1.05); */
  }
  :active {
    transform: scale(1);
    box-shadow: 3px 3px 2px 1px black;
  }

  @media (max-width: 900px) {
    height: 13rem;
    width: 7rem;
  }
`
const ResultImg = styled.img`
  height: 80%;
`
const ResultTitle = styled.span`
  text-align: center;
  font-weight: 400;
`
const ResultGenre = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
`

const ResultRating = styled.span`
  height: 2rem;
  width: 2rem;
  background: white;
  display: block;
  color: black;
  position: relative;
  bottom: 80%;
  left: 90%;
  z-index: 2;
  text-align: center;
  line-height: 2rem;
  border-radius: 5rem;
`
