import React from 'react'
import Content from './Content'
import styled from 'styled-components'
import Hero from './Hero'

export default (props) => {
  const { movies } = props
  return (
    <Wrapper>
      <Hero />
      <Content {...movies} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`
