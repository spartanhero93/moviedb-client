import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import { genreList } from './genres'

function getGenreFromId(itemGeneres) {
  itemGeneres.sort((a, b) => a - b)
  genreList.map((obj) => {
    itemGeneres.map((item) => {
      if (obj.id === item) return obj.name
    })
  })
}

export default class Content extends Component {
  render() {
    console.log(this.props)
    const { results } = this.props.data
    const { type } = this.props
    if (!results) return <div>Loading...</div>
    return (
      <Wrapper>
        {results.map((item) => (
          <Movie key={item.id}>
            <MovieImg src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            <MovieTitle>{item.title}</MovieTitle>
            <MovieRating>{getGenreFromId(item.genre_ids)}</MovieRating>
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
  height: 100%;
  width: 90%;
  padding: 2rem 3rem;
  animation: ${fadeIn} 2s;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
`
const Movie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 18rem;
  width: 10rem;
  box-shadow: 3px 3px 5px 2px black;
  transition: all .3s ease-in-out;
  :hover {
    box-shadow: 3px 3px 10px 4px black;
    transform: scale(1.05);
  }
  :active {
    transform: scale(1);
    box-shadow: 3px 3px 2px 1px black;
  }
`
const MovieImg = styled.img`height: 80%;`
const MovieTitle = styled.span``
const MovieRating = styled.span``
