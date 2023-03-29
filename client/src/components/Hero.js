import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <h1>Welcome to the MovieDB app</h1>
        <p>Browse all kinds of media using MDAPI</p>
      </Wrapper>
    </div>
  )
}

export const HeroRoute = () => <Route exact path='/' component={Hero} />

const Wrapper = styled.div`
  height: 50vh;
  width: 100%;
  border: 2px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
