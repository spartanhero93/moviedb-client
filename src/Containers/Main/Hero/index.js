import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Wrapper>
      <h1>Welcome to the MovieNow App</h1>
      <h4>Browse movies, tv shows, actors, and even other users!</h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  height: 20rem;
  width: 100%;
  border: 1px yellow solid;
  color: white;
`
