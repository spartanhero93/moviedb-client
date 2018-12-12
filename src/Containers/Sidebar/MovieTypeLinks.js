import React from 'react'
import styled from 'styled-components'

export default function MovieTypeLinks(props) {
  const { current, fetchMovies } = props
  return (
    <Links>
      <Toggle onChange={() => fetchMovies('now_playing', 'Now Playing')}>
        <input id='a' type='radio' name='radio' />
        <label htmlFor='a'>Now Playing</label>
      </Toggle>
      <Toggle>
        <input onChange={() => fetchMovies('top_rated', 'Top Rated')} id='b' type='radio' name='radio' />
        <label htmlFor='b'>Top Rated</label>
      </Toggle>
      <Toggle onChange={() => fetchMovies('upcoming', 'Upcoming')}>
        <input id='c' type='radio' name='radio' />
        <label htmlFor='c'>Upcoming</label>
      </Toggle>
      <Toggle onChange={() => fetchMovies('popular', 'Popular')}>
        <input id='d' type='radio' name='radio' />
        <label htmlFor='d'>Popular</label>
      </Toggle>
    </Links>
  )
}

const Links = styled.div`width: 100%;`
const Toggle = styled.div`
  > input {
    display: none;
    &:checked + label {
      background: black;
    }
  }
  > label {
    padding: 1rem;
    display: block;
    height: 100%;
    width: 100%;
    transition: all .5s ease-in-out;
    cursor: pointer;
  }
`

/**
 * 
 *  if (props.active === 'Now Playing') return 'black'
      if (props.active === 'Top Rated') return 'black'
      if (props.active === 'Upcoming') return 'black'
      if (props.active === 'Popular') return 'black'
 */
