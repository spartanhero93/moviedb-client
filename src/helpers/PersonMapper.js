import React from 'react'
import styled from 'styled-components'
import MoviesMapper from './ResultsMapper'
import NoImage2 from '../icons/404-notfound.png'

export const PersonMapper = ({ results }) => {
  console.log(results)
  return (
    <Wrapper>
      {results.map((item) => {
        results.map((item) => (
          <Person key={item.id}>
            <PersonImg
              src={
                item.profile_path ? (
                  `https://image.tmdb.org/t/p/w500${item.poster_path}`
                ) : (
                  NoImage2
                )
              }
            />
            <PersonTitle>{item.name}</PersonTitle>
            {/* <PersonKnowFor>
            </PersonKnowFor>
            <PersonRating>{item.vote_average}</PersonRating> */}
          </Person>
        ))
      })}
    </Wrapper>
  )
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
// const Title = styled.div`
//   font-weight: 200;
//   width: 100%;
// `
const Person = styled.div`
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
const PersonImg = styled.img`height: 80%;`
const PersonTitle = styled.span`
  text-align: center;
  font-weight: 400;
`
const PersonKnowFor = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: .8rem;
`

const PersonRating = styled.span`
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
