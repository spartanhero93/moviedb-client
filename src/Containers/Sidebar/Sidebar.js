import React, { Component } from 'react'
import styled from 'styled-components'
import { fetchDB } from '../../redux/API'
import MovieTypeLinks from './MovieTypeLinks'
import Main from '../Main'
//import {Switch, Link, Route} from 'react-router-dom'

export default class Sidebar extends Component {
  state = {
    data: {},
    type: '',
    sideBarToggled: false
  }

  componentDidMount() {
    this.fetchMovies('now_playing', 'Now Playing')
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
    const { data, type } = this.state
    return (
      <Wrapper className='sidebar'>
        <Container>
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
        <Main movies={data} />
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
  background: #1e2328;
  color: white;
  text-align: center;
  width: 10rem;
  @media (max-width: 900px) {
    font-size: .8rem;
    width: 25vw;
  }
`

const OtherLinks = styled.div``
