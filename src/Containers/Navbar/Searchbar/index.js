import React, { Component } from 'react'
import styled from 'styled-components'

export default class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <input type='text' placeholder='' />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 15rem;
  > input[type='text'] {
    width: 5rem;
    height: 2rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-repeat: no-repeat;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;

    &:focus {
      width: 100%;
    }
  }
`
