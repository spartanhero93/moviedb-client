import React, { Component } from 'react'
import styled from 'styled-components'
import Content from '../Content/Content'
import { fetchDB } from '../../redux/API'

export default class Sidebar extends Component {
  state = {
    data: {},
    type: ''
  }

  fetchMovies = async (name, type) => {
    try {
      const response = await fetchDB(name)
      this.setState({ data: response, type })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Wrapper className='sidebar'>
        <Container>
          <div className='User'>
            <div>Picture</div>
            <div>Luis Lopez</div>
          </div>
          <Links className='links'>
            <div onClick={() => this.fetchMovies('now_playing', 'Now Playing')}>Now Playing</div>
            <div onClick={() => this.fetchMovies('top_rated', 'Top Rated')}>Top Rated</div>
            <div onClick={() => this.fetchMovies('upcoming', 'Upcoming')}>Upcoming</div>
            <div onClick={() => this.fetchMovies('popular', 'Popular')}>Popular</div>
          </Links>
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
        <Content {...this.state} />
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
  width: 10vw;
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
const Links = styled.div`
  > div {
    transition: all .5s ease-in-out;
    &:hover {
      color: #61dafb;
      transform: scale(1.1);
    }
  }
`
