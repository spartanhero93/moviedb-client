import React from 'react'
import styled from 'styled-components'
import MoviesMapper from './ResultsMapper'

export const SearchResultsMapper = ({ results }) => {
  console.log(results)
  return (
    <Wrapper>
      {results.map((item) => <div key={item.id}>{item.media_type}</div>)}
      {/* {results.map((item) => 
        item.media_type === 'movie' || 'tv' ? (
          <MoviesMapper {...results} />
        ) : (
          <Person>{item.name}</Person>
        )
      )} */}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Person = styled.div``
