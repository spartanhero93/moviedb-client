import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Content from '../Content/Content'
import { fetchDB } from '../../redux/API'
import MovieTypeLinks from './MovieTypeLinks'
import UserIcon from '../../icons/user.svg'
import Hero from '../Hero'

export default class Sidebar extends Component {
  state = {
    data: {},
    type: '',
    sideBarToggled: false
  }

  fetchMovies = async (name, type) => {
    try {
      const response = await fetchDB(name)
      this.setState({ data: response, type })
    } catch (error) {
      console.error(error)
    }
  }

  toggleSidebar = () => {
    this.setState({ sideBarToggled: !this.state.sideBarToggled })
  }

  render() {
    const { type, sideBarToggled } = this.state
    return (
      <Wrapper className='sidebar'>
        <Container sideBarToggled={sideBarToggled}>
          <User className='User'>
            <img src={UserIcon} />
            <div>Hello, Guest</div>
          </User>
          <MovieTypeLinks current={type} fetchMovies={this.fetchMovies} />
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
        <input type='checkbox' name='checkbox' onChange={this.toggleSidebar} />
        <Content {...this.state} />
      </Wrapper>
    )
  }
}

const fade = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const Container = styled.div`
  display: ${(props) => (props.sideBarToggled ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-around;
  background: #1e2328;
  color: white;
  text-align: center;
  @media (max-width: 900px) {
    font-size: .8rem;
    width: 25vw;
  }
`
const User = styled.div`
  img {
    height: 3rem;
  }
`

const OtherLinks = styled.div``
