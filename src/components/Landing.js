import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import DOMAIN from '../config'

class Landing extends Component {
  state = {
    name: '',
    link: ''
  }

  componentDidMount () {}

  fetchPosts = async () => {
    const response = await axios.get(`${DOMAIN}/posts`)
    console.log(response)
  }

  handleInputs = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const name = this.state.name, link = this.state.link

    axios
      .post(`${DOMAIN}/posts`, { name, link })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  render () {
    const { name, link } = this.state
    return (
      <Wrapper>
        <h1>Welcome to the Landing page</h1>
        <div>
          <h4>Post a new item</h4>
          <form onSubmit={this.handleFormSubmit}>
            <input
              onChange={this.handleInputs}
              value={name}
              type='text'
              name='name'
            />
            <input
              onChange={this.handleInputs}
              value={link}
              type='text'
              name='link'
            />
            <input onClick={this.handleFormSubmit} type='submit' />
          </form>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`

export default Landing
