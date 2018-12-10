import React, { Component } from 'react'
import styled from 'styled-components'
import Content from '../Content/Content'
import { fetchDB } from '../../redux/API'

export default class Sidebar extends Component {
  state = {
    data: {}
  }

  fetchMovies = async (name) => {
    try {
      const response = await fetchDB(name)
      this.setState({ data: response })
    } catch (error) {}
  }

  render() {
    return (
      <Wrapper className='sidebar'>
        <Container>
          <div className='User'>
            <div>Picture</div>
            <div>Luis Lopez</div>
          </div>
          <div className='links'>
            <div onClick={() => this.fetchMovies('now_playing')}>Now Playing</div>
            <div onClick={() => this.fetchMovies('top_rated')}>Top Rated</div>
            <div onClick={() => this.fetchMovies('upcoming')}>Upcoming</div>
            <div onClick={() => this.fetchMovies('popular')}>Popular</div>
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
        </Container>
        <Content {...this.state.data} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15vw;
  background: #1e2328;
  color: white;
  text-align: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  > div {
    padding: 2rem 1rem;
    > div {
      padding: .5rem 0;
    }
  }
`
