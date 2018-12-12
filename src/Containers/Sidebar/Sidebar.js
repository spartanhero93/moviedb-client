import React, { Component } from 'react'
import styled from 'styled-components'
import Content from '../Content/Content'
import { fetchDB } from '../../redux/API'
import MovieTypeLinks from './MovieTypeLinks'
import UserIcon from '../../icons/user.svg'

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
          <User className='User'>
            <img src={UserIcon} />
            <div>Hello, Guest</div>
          </User>
          <MovieTypeLinks current={this.state.type} fetchMovies={this.fetchMovies} />
          <OtherLinks className='genres'>
            <div>
              <h4>TV Shows</h4>
            </div>
            <div>
              <h4>Reviews</h4>
            </div>
            <div>
              <h4>Genres</h4>
            </div>
          </OtherLinks>
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

  > div {
    > div {
    }
  }
`
const User = styled.div`
  img {
    height: 3rem;
  }
`

const OtherLinks = styled.div``
