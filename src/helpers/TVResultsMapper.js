import React, { Component } from 'react'
import styled from 'styled-components'
import { getGenreFromId } from './genreLookup'
import NoImage2 from '../icons/404-notfound.png'

export default class TVResultsMapper extends Component {
  render() {
    const { results } = this.props
    const { type } = this.props
    console.log(results)
    return (
      <div>
        <Title>{type}</Title>
        <Wrapper>
          {results.map((item) => (
            <TV key={item.id}>
              <TVImg
                src={
                  item.poster_path ? (
                    `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  ) : (
                    NoImage2
                  )
                }
              />
              <TVTitle>{item.name}</TVTitle>
              <TVGenre>
                {getGenreFromId(item.genre_ids).map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </TVGenre>
              <TVRating>{item.vote_average}</TVRating>
            </TV>
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
const TV = styled.div`
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
const TVImg = styled.img`height: 80%;`
const TVTitle = styled.span`
  text-align: center;
  font-weight: 400;
`
const TVGenre = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: .8rem;
`

const TVRating = styled.span`
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
