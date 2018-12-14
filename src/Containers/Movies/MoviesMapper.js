import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import { genreList } from './genres'

function getGenreFromId(itemGeneres) {
  let genres = []
  itemGeneres.sort((a, b) => a - b)
  genreList.map((obj) => itemGeneres.map((item) => (obj.id === item ? genres.push(obj) : null)))
  if (genres.length > 3) {
    return genres.splice(0, 3)
  } else {
    return genres
  }
}

export default class MoviesMapper extends Component {
  state = {
    currentList: []
  }

  componentDidUpdate(props) {
    console.log(props)
  }
  componentWillReceiveProps(props) {
    console.log(props)
  }

  render() {
    const { results } = this.props
    const { type } = this.props
    return (
      <Wrapper>
        <Title>{type}</Title>
        {results.map((item) => (
          <Movie key={item.id}>
            <MovieImg src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            <MovieTitle>{item.title}</MovieTitle>
            <MovieGenre>
              {getGenreFromId(item.genre_ids).map((item) => <span key={item.id}>{item.name}</span>)}
            </MovieGenre>
            <MovieRating>{item.vote_average}</MovieRating>
          </Movie>
        ))}
      </Wrapper>
    )
  }
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  color: white;
  padding: 2rem 3rem;
  animation: ${fadeIn} 2s;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    padding: 0;
  }
`
const Title = styled.div`
  font-weight: 200;
  width: 100%;
`
const Movie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  height: 26rem;
  width: 14rem;
  box-shadow: 3px 3px 5px 2px black;
  transition: all .3s ease-in-out;
  font-size: 1.2rem;
  :hover {
    box-shadow: 3px 3px 10px 4px black;
    transform: scale(1.05);
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
const MovieImg = styled.img`height: 80%;`
const MovieTitle = styled.span`
  text-align: center;
  font-weight: 400;
`
const MovieGenre = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: .8rem;
`

const MovieRating = styled.span`
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
