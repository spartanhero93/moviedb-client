import React from 'react'
import styled from 'styled-components'
import HandlePosts from '../Containers/HandlePosts'

const Landing = props => (
  <Wrapper>
    <h1>Welcome to the landing page</h1>
    <HandlePosts />
  </Wrapper>
)

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`
export default Landing
