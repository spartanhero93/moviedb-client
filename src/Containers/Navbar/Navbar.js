import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #20232a;
  color: #61dafb;
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

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper className='navbar'>
          <div>
            <h1>Movie Now!</h1>
          </div>
          <div>
            <input type='text' placeholder='Search...' />
          </div>
        </Wrapper>
      </React.Fragment>
    )
  }
}
