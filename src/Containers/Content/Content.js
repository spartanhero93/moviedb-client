import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

import { genreList } from './genres'
import Hero from '../Hero'

function getGenreFromId(itemGeneres) {
  let genres = []
  itemGeneres.sort((a, b) => a - b)
  genreList.map((obj) => {
    itemGeneres.map((item) => {
      if (obj.id === item) return genres.push(obj)
    })
  })
  if (genres.length > 3) {
    return genres.splice(0, 3)
  } else {
    return genres
  }
}

export default class Content extends Component {
  render() {
    console.log(this.props)
    const { results } = this.props.data
    const { type } = this.props
    if (!results) return <div>Loading...</div>
    return (
      <Wrapper>
        <Title>{type}</Title>
        <Hero />
        {results.map((item) => (
          <Movie key={item.id}>
            <MovieImg src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            <MovieTitle>{item.title}</MovieTitle>
            <MovieGenre>
              {getGenreFromId(item.genre_ids).map((item) => <span key={item.id}>{item.name}</span>)}
            </MovieGenre>
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
  padding: 2rem 3rem;
  animation: ${fadeIn} 2s;
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
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
const MovieTitle = styled.span`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
`
const MovieGenre = styled.div`
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-around;
  > span {
    font-size: .8rem;
  }
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 200;
  width: 100%;
`
