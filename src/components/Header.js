import React from 'react'
import styled from 'styled-components'

const Header = props => (
  <Wrapper>
    <h1>Streaming Service</h1>
    <Navbar>
      <ul>
        <a href='/login'>Login</a>
        <a href='/register'>Sign Up</a>
      </ul>
    </Navbar>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: #222;
  color: white;
`
const Navbar = styled.nav`
  align-self: center;
  ul {
    a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default Header
