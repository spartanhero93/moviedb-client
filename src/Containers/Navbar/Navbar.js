import React, { Component } from 'react'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <Wrapper className='navbar'>
        <div>
          <h1>Movie Now!</h1>
        </div>
        <div>
          <input type='text' placeholder='Search...' />
        </div>
        <div id='account'>
          <span>Sign in</span>

          <span>Sign up</span>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #de5357;
  color: white;
  line-height: 4rem;
  text-align: center;

  > div {
    width: 15rem;
    > input[type=text] {
      width: 10rem;
      border: 2px solid #ccc;
      outline: none;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      transition: width 0.4s ease-in-out;

      &:focus {
        width: 100%;
      }
    }
  }
`
