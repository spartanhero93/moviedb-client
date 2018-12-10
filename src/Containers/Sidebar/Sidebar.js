import React, { Component } from 'react'
import styled from 'styled-components'

export default class Sidebar extends Component {
  render() {
    return (
      <Wrapper className='sidebar'>
        <div className='User'>
          <div>Picture</div>
          <div>Luis Lopez</div>
        </div>
        <div className='links'>
          <div>Now Playing</div>
          <div>Top Rated</div>
          <div>Coming Soon</div>
          <div>Latest</div>
        </div>
        <div className='genres'>
          <div>
            <h4>Genres</h4>
          </div>
          <div>Action</div>
          <div>Adventure</div>
          <div>Comedy</div>
          <div>Documentary</div>
          <div>Horror</div>
          <div>Suspense</div>
          <div>Drama</div>
          <div>Romance</div>
          <div>Thriller</div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10vw; /* coincides with navbar width */
  height: 100vh;
  background: #1e2328;
  color: white;
  text-align: center;

  > div {
    padding: 2rem 1rem;
    > div {
      padding: .5rem 0;
    }
  }
`
