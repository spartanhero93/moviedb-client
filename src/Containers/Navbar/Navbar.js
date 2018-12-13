import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from './Searchbar'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #61dafb;
  color: black;
  line-height: 4rem;
  text-align: center;
`

export default class Navbar extends Component {
  state = {
    isLoggedIn: false,
    data: {}
  }

  render() {
    return (
      <Wrapper className='navbar'>
        <div>
          <h1>Movie Now!</h1>
        </div>
        <SearchBar />
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </Wrapper>
    )
  }
}
