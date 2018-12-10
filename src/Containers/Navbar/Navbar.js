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
          <input type='text' />
          <span>Q</span>
        </div>
        <div id='account'>
          <span>Sign in</span>

          <span>Sign up</span>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90vw;
  height: 6.4rem;
  background-color: #de5357;
  color: white;
  line-height: 5rem;

  > div {
    border: solid 1px red;
  }
`
